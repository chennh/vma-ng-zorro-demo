import CardBean from './CardBean'
import LinkBean from './LinkBean'
import WeappBean from './WeappBean'


export default class GroupWarningRecordQueryBO {

  /**
   * 行为提醒 image:发送带二维码图片 link:发送链接分享 weapp:发送小程序 card:发送名片 text:文本
   */
    public behaviorType!: string

  /**
   * 名片对象
   */
    public cardBean!: CardBean

  /**
   * 群聊ID
   */
    public chatId!: string

  /**
   * 客户ID
   */
    public customerId!: number

  /**
   * 客户名称
   */
    public customerName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 触发关键字 逗号隔开
   */
    public keyWord!: string

  /**
   * 链接对象
   */
    public linkBean!: LinkBean

  /**
   * 消息内容
   */
    public msgContent!: string

  /**
   * 消息ID
   */
    public msgId!: string

  /**
   * 消息时间(触发时间)
   */
    public msgTime!: number

  /**
   * 群名称
   */
    public name!: string

  /**
   * 群主名称
   */
    public ownerName!: string

  /**
   * 员工ID
   */
    public ownerStaffId!: number

  /**
   * 小程序对象
   */
    public weappBean!: WeappBean

}
