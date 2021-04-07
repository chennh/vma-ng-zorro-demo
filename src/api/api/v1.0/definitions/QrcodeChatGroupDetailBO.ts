import CustomerParamDTO from './CustomerParamDTO'
import UpdateQrcodeChatGroupListDTO from './UpdateQrcodeChatGroupListDTO'


export default class QrcodeChatGroupDetailBO {

  /**
   * 标签列表
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * 企业ID
   */
    public enterpriseId!: number

  /**
   * 群列表
   */
    public groupList!: UpdateQrcodeChatGroupListDTO[]

  /**
   * ID
   */
    public id!: number

  /**
   * 好友是否认证 0 否 1是
   */
    public isAuth!: number

  /**
   * 是否打标签 0否 1是
   */
    public isLabel!: number

  /**
   * 平台ID
   */
    public platformId!: number

  /**
   * 拉群方式 1 群二维码拉群 2企微活码拉群
   */
    public pullWay!: number

  /**
   * 二维码名称
   */
    public qrcodeName!: string

  /**
   * 员工ID集合的json
   */
    public staffIdList!: number[]

  /**
   * 入群引导语
   */
    public welcomeContent!: string

}
