import { NgModule } from '@angular/core'
import { AxiosError } from 'axios'
import { environment } from '@/environments'
import axiosPlugin from 'vma-assist/dist/static/js/tools/axios'
import { VmaLoaderModule, VmaLoaderService } from 'vma-ng/vma-ng-zorro'
import { macKeyCookie } from '@/storage/cookie/index'
import { NzMessageService } from 'ng-zorro-antd/message'
import { RouterService } from 'app/modules/services/router/router.service'
import { NzModalService } from 'ng-zorro-antd/modal'
import { PackData } from 'vma-assist/typings/utils'
import { AdminInfoService } from 'app/modules/services/adminInfo/admin-info.service'
import { VmaPlugin } from 'vma-ng/vma-ng-assist'

interface VmaException {
  businessException: boolean
  code: string
  httpStatus: string
  message: string
  status: number
  http: PackData<any>
}


@NgModule({
  declarations: [],
  imports: [
    VmaLoaderModule
  ]
})
export class AxiosModule {

  onException = false
  on401 = false

  constructor(
    private message: NzMessageService,
    private modal: NzModalService,
    private loaderService: VmaLoaderService,
    private routerService: RouterService,
    private adminInfoService: AdminInfoService,
  ) {
    VmaPlugin.init('AxiosModule', () => {
      this.install()
    })
  }

  install(): void {
    const that = this
    axiosPlugin({
      defaults: {
        baseURL: environment.api
      },
      interceptor: {
        errorHandle: {
          error(error: AxiosError) {
            that.handleError(error)
            return Promise.reject(error)
          }
        },
        loading: {
          showLoader() {
            that.loaderService.show()
          },
          hideLoader() {
            that.loaderService.hide()
          }
        },
        authorization: {
          debug: !environment.enableAuthorization,
          getMacKey() {
            return macKeyCookie.get() || ''
          }
        }
      }
    })
  }

  handleError(error: AxiosError<VmaException>) {
    if (!error.response) {
      if (error.message === 'Network Error') {
        this.handleMaintain(error)
      } else {
        this.handleException(error)
      }
    } else {
      if (error.response.status === 401) {
        this.handle401(error.response.data || {})
      } else if (error.response.status === 502) {
        this.handleMaintain(error)
      } else {
        this.handleVmaException(error.response.data)
      }
    }
  }

  handleMaintain(error: AxiosError) {
    this.adminInfoService.afterLogout()
    this.routerService.navigateToMaintain()
    this.message.warning('系统维护中，请稍候')
  }

  handleException(error: AxiosError) {
    if (this.onException) {
      return
    }
    this.onException = true
    this.modal.error({
      nzTitle: '系统提示',
      nzContent: '网络繁忙，请稍候再试',
      nzClosable: false,
      nzMaskClosable: false,
      nzOnOk: () => {
        this.onException = false
      },
      nzOnCancel: () => {
        this.onException = false
      }
    })
  }

  handleVmaException(exception: VmaException) {
    if (exception.businessException) {
      this.message.warning(exception.message)
    } else {
      this.modal.error({
        nzTitle: '系统提示',
        nzWidth: 600,
        nzContent: `
        <div class="http-error">
          <div class="http-error-item"><b>http: </b><span>${exception.httpStatus} ${exception.status ? `(${exception.status})` : ''}</span></div>
          <div class="http-error-item"><b>code: </b><span>${exception.code}</span></div>
          <div class="http-error-item"><b>url: </b><span>${exception.http.url}</span></div>
          <div class="http-error-item"><b>requestId: </b><span>${exception.http.requestId}</span></div>
          <div class="http-error-item"><b>message: </b><span>${exception.message}</span></div>
        </div>`
      })
    }
  }

  handle401(response: any) {
    if (this.on401) {
      return
    }
    this.on401 = true
    let message = ''
    switch (String(response.code).toUpperCase()) {
      case 'KICK_OUT':
        message = '您的账号已在其他地方登录'
        break
      case 'AUTHORIZATION_NONCE_TIMESTAMP_INVALID':
        message = '系统时间与服务时间差异过大，请校对系统时间'
        break
      default:
        message = '授权过期，请重新登录'
    }
    if (this.adminInfoService.adminInfo) {
      this.message.warning(message)
    }
    this.adminInfoService.afterLogout()
    this.routerService.navigateToLogin()
    this.on401 = false
  }
}
