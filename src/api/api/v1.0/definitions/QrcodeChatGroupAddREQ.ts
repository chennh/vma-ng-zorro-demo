import CustomerParamDTO from './CustomerParamDTO'
import AddQrcodeChatGroupListDTO from './AddQrcodeChatGroupListDTO'


export default class QrcodeChatGroupAddREQ {

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 群列表
   */
    public groupList?: AddQrcodeChatGroupListDTO[]

  /**
   * 好友是否认证 0 否 1是
   */
    public isAuth?: number

  /**
   * 是否打标签 0否 1是
   */
    public isLabel?: number

  /**
   * 拉群方式 1 群二维码拉群 2企微活码拉群
   */
    public pullWay?: number

  /**
   * 二维码名称
   */
    public qrcodeName?: string

  /**
   * 员工ID集合的json
   */
    public staffIdList?: number[]

  /**
   * 入群引导语
   */
    public welcomeContent?: string

}
