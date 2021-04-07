import EventReceiveBO from './EventReceiveBO'
import SelfAgentBO from './SelfAgentBO'


export default class AuthMessageBO {

  /**
   * 企业ID
   */
    public corpId!: string

  /**
   * 企业微信名称
   */
    public corpName!: string

  /**
   * 圆logo图
   */
    public corpRoundLogoUrl!: string

  /**
   * logo图
   */
    public corpSquareLogoUrl!: string

  /**
   * 事件回调地址详情
   */
    public eventReceiveBo!: EventReceiveBO

  /**
   * 如果steps = 1 判断企业微信是否绑定 0未绑定 1绑定
   */
    public isBound!: number

  /**
   * 企业微信是否配置完成
   */
    public isFinish!: number

  /**
   * 自建应用配置详情
   */
    public selfAgentBo!: SelfAgentBO

  /**
   * 步骤
   */
    public steps!: number

}
