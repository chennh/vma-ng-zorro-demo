import { Component, Injector } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { NzModalService } from 'ng-zorro-antd/modal'
import { IParams, ITable, IPagination, IModel, IFormModel } from '../definition'
import { ExtObj, ExtBlock, IBlockData } from '@/utils'


@Component({
  template: ''
})
export abstract class IndexComponent {
  /**
   * 列表查询参数，子类可通过 $param.clone({...})拷贝扩展参数
   *
   * @memberOf IndexComponent
   */
  $params = ExtObj.create<IParams>({
    current: 1,
    size: 20
  })
  /**
   * 列表数据，子类可通过 $param.clone({...})拷贝扩展参数
   *
   * @memberOf IndexComponent
   */
  $table = ExtObj.create<ITable>({
    list: [],
  })
  /**
   * 分页数据，子类可通过 $param.clone({...})拷贝扩展参数
   *
   * @memberOf IndexComponent
   */
  $pagination = ExtObj.create<IPagination>({
    current: 1,
    total: 0
  })

  message: NzMessageService
  modal: NzModalService


  /**
   * api接口，子类必须重写该属性以提供相应的接口方法
   *
   * @memberOf IndexComponent
   */
  abstract api: any
  /**
   * 查询参数
   *
   * @memberOf IndexComponent
   */
  params: IParams = this.$params.copyValue
  /**
   * 列表数据
   *
   * @memberOf IndexComponent
   */
  table: ITable = this.$table.copyValue
  /**
   * 分页数据
   *
   * @memberOf IndexComponent
   */
  pagination: IPagination = this.$pagination.copyValue
  /**
   * 新增/编辑
   *
   * @memberOf IndexComponent
   */
  formBlock = ExtBlock.create<IBlockData<IFormModel>>().cover({
    title: () => this.formBlock.value.entity && this.formBlock.value.entity.id ? '编辑' : '新增',
    showId: async (id: number | string) => {
      const entity = await this.getApiDetail()({ id })
      this.formBlock.showEntity(entity)
    },
    submit: () => {
      this.page()
      this.formBlock.hide()
    }
  })
  /**
   * 详情
   *
   * @memberOf IndexComponent
   */
  detailBlock = ExtBlock.create<IBlockData<IModel>>().cover({
    showId: async (id: number | string) => {
      const entity = await this.getApiDetail()({ id })
      this.formBlock.showEntity(entity)
    }
  })


  constructor(
    injector: Injector
  ) {
    this.message = injector.get(NzMessageService)
    this.modal = injector.get(NzModalService)
  }

  /**
   * 查询首页
   *
   * @memberOf IndexComponent
   */
  async search() {
    this.page(1)
  }

  /**
   * 分页查询
   *
   * @param [current=this.params.current] 页码
   * @param [size=this.params.size] 页数
   *
   * @memberOf IndexComponent
   */
  async page(current = this.params.current, size = this.params.size) {
    this.params.current = current
    this.params.size = size

    const page = await this.getApiPage()(this.getParams())
    this.resolvePage(page)
  }

  /**
   * 处理分页接口返回数据
   *
   * @param page 数据
   */
  resolvePage(page: any) {
    this.pagination.current = page.current
    this.pagination.total = page.total
    this.table.list = page.records
  }

  /**
   * 更新
   *
   * @param data 更新数据
   * @param [label='更新'] 更新成功后提示文案
   *
   * @memberOf IndexComponent
   */
  async update(data: any, label = '更新') {
    await this.getApiUpdate()(data)
    this.message.success(`${label}成功`)
    this.page()
  }

  /**
   * 二次确认删除
   *
   * @param id 主键
   *
   * @memberOf IndexComponent
   */
  confirmDel(id: string | number) {
    this.modal.confirm({
      nzTitle: '确定删除？',
      nzContent: '删除操作不可恢复，确定删除该数据？',
      nzOnOk: () => {
        this.del(id)
      }
    })
  }

  /**
   * 直接删除
   *
   * @param id 主键
   *
   * @memberOf IndexComponent
   */
  async del(id: any) {
    await this.getApiDel()({ ids: id, id })
    this.message.success('删除成功')
  }

  /**
   * angular列表渲染指定trackBy，默认用id作为key
   *
   * @param index 索引
   * @param data 数据
   * @returns ID
   *
   * @memberOf IndexComponent
   */
  trackById(index: number, data: IModel) {
    return data.id
  }


  /**
   * 获取page接口，子类可重写该方法以提供自定义接口
   *
   * @returns page接口
   *
   * @memberOf IndexComponent
   */
  getApiPage() {
    return this.api.page
  }
  /**
   * 获取update接口，子类可重写该方法以提供自定义接口
   *
   * @returns update接口
   *
   * @memberOf IndexComponent
   */
  getApiUpdate() {
    return this.api.update
  }
  /**
   * 获取del接口，子类可重写该方法以提供自定义接口
   *
   * @returns del接口
   *
   * @memberOf IndexComponent
   */
  getApiDel() {
    return this.api.update
  }
  /**
   * 获取detail接口，子类可重写该方法以提供自定义接口
   *
   * @returns detail接口
   *
   * @memberOf IndexComponent
   */
  getApiDetail() {
    return this.api.detail || this.api.get
  }
  /**
   * 获取查询参数
   *
   * @returns this.params
   *
   * @memberOf IndexComponent
   */
  getParams() {
    return this.params
  }
}
