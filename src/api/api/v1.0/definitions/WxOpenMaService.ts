import WxMaAnalysisService from './WxMaAnalysisService'
import WxOpenMaCategoryListResult from './WxOpenMaCategoryListResult'
import WxMaCloudService from './WxMaCloudService'
import WxMaCodeService from './WxMaCodeService'
import WxOpenMaDomainResult from './WxOpenMaDomainResult'
import WxMaExpressService from './WxMaExpressService'
import WxOpenMaGrayReleasePlanResult from './WxOpenMaGrayReleasePlanResult'
import WxImgProcService from './WxImgProcService'
import WxMaJsapiService from './WxMaJsapiService'
import WxOpenMaQueryAuditResult from './WxOpenMaQueryAuditResult'
import WxMaLiveGoodsService from './WxMaLiveGoodsService'
import WxMaLiveService from './WxMaLiveService'
import WxMaMediaService from './WxMaMediaService'
import WxMaMsgService from './WxMaMsgService'
import WxOcrService from './WxOcrService'
import WxOpenMaPageListResult from './WxOpenMaPageListResult'
import WxMaPluginService from './WxMaPluginService'
import WxGetQrcodeJumpResult from './WxGetQrcodeJumpResult'
import WxMaQrcodeService from './WxMaQrcodeService'
import RequestHttp from './RequestHttp'
import WxMaRunService from './WxMaRunService'
import WxMaSecCheckService from './WxMaSecCheckService'
import WxMaSettingService from './WxMaSettingService'
import WxMaShareService from './WxMaShareService'
import WxOpenMaShowItemResult from './WxOpenMaShowItemResult'
import WxMaSubscribeService from './WxMaSubscribeService'
import WxOpenMaWeappSupportVersionResult from './WxOpenMaWeappSupportVersionResult'
import WxOpenMaTesterListResult from './WxOpenMaTesterListResult'
import WxMaUserService from './WxMaUserService'
import WxOpenMaWebDomainResult from './WxOpenMaWebDomainResult'
import WxMaConfig from './WxMaConfig'
import WxOpenMaSearchStatusResult from './WxOpenMaSearchStatusResult'


export default class WxOpenMaService {

  /**
   * -
   */
    public accessToken!: string

  /**
   * -
   */
    public accountBasicInfo!: string

  /**
   * -
   */
    public analysisService!: WxMaAnalysisService

  /**
   * -
   */
    public categoryList!: WxOpenMaCategoryListResult

  /**
   * -
   */
    public cloudService!: WxMaCloudService

  /**
   * -
   */
    public codeService!: WxMaCodeService

  /**
   * -
   */
    public domain!: WxOpenMaDomainResult

  /**
   * -
   */
    public expressService!: WxMaExpressService

  /**
   * -
   */
    public grayReleasePlan!: WxOpenMaGrayReleasePlanResult

  /**
   * -
   */
    public imgProcService!: WxImgProcService

  /**
   * -
   */
    public jsapiService!: WxMaJsapiService

  /**
   * -
   */
    public latestAuditStatus!: WxOpenMaQueryAuditResult

  /**
   * -
   */
    public liveGoodsService!: WxMaLiveGoodsService

  /**
   * -
   */
    public liveService!: WxMaLiveService

  /**
   * -
   */
    public mediaService!: WxMaMediaService

  /**
   * -
   */
    public msgService!: WxMaMsgService

  /**
   * -
   */
    public ocrService!: WxOcrService

  /**
   * -
   */
    public pageList!: WxOpenMaPageListResult

  /**
   * -
   */
    public pluginService!: WxMaPluginService

  /**
   * -
   */
    public qrcodeJump!: WxGetQrcodeJumpResult

  /**
   * -
   */
    public qrcodeService!: WxMaQrcodeService

  /**
   * -
   */
    public requestHttp!: RequestHttp

  /**
   * -
   */
    public runService!: WxMaRunService

  /**
   * -
   */
    public secCheckService!: WxMaSecCheckService

  /**
   * -
   */
    public settingService!: WxMaSettingService

  /**
   * -
   */
    public shareService!: WxMaShareService

  /**
   * -
   */
    public showWxaItem!: WxOpenMaShowItemResult

  /**
   * -
   */
    public subscribeService!: WxMaSubscribeService

  /**
   * -
   */
    public supportVersion!: string

  /**
   * -
   */
    public supportVersionInfo!: WxOpenMaWeappSupportVersionResult

  /**
   * -
   */
    public testerList!: WxOpenMaTesterListResult

  /**
   * -
   */
    public userService!: WxMaUserService

  /**
   * -
   */
    public webViewDomain!: string

  /**
   * -
   */
    public webViewDomainInfo!: WxOpenMaWebDomainResult

  /**
   * -
   */
    public wxMaConfig!: WxMaConfig

  /**
   * -
   */
    public wxaSearchStatus!: WxOpenMaSearchStatusResult

}
