import CustomerParamDTO from './CustomerParamDTO'
import ReplyContentDTO from './ReplyContentDTO'


export default class UpdateQrcodeGroupCodeDTO {

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 加入客户池类型 0关闭 1潜在 2 待分配   4公海
   */
    public cutomerType?: number

  /**
   * -
   */
    public id?: number

  /**
   * 是否开启打标签
   */
    public isAddLabel?: number

  /**
   * 是否开启欢迎语 0关闭 大于0表示人数
   */
    public isAutoReply?: number

  /**
   * 活码头像
   */
    public qrcodeIcon?: string

  /**
   * 活码名称
   */
    public qrcodeName?: string

  /**
   * 欢迎语内容
   */
    public replyContentDto?: ReplyContentDTO

}
