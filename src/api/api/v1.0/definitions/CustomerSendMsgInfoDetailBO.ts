import CustomerChildFiterDTO from './CustomerChildFiterDTO'
import ReplyContentDTO from './ReplyContentDTO'


export default class CustomerSendMsgInfoDetailBO {

  /**
   * 创建者名称
   */
    public createStaffName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 错误信息
   */
    public errorMsg!: string

  /**
   * -
   */
    public id!: number

  /**
   * 标签名称集合
   */
    public labelList!: CustomerChildFiterDTO[]

  /**
   * 满足条件客户数量
   */
    public matchNum!: number

  /**
   * 群发名称
   */
    public name!: string

  /**
   * 因不是好友而发送失败数量
   */
    public notFriendNum!: number

  /**
   * 未送达客户数量
   */
    public notReceiveNum!: number

  /**
   * 未发送员工数量
   */
    public notSendNum!: number

  /**
   * 送达客户数量
   */
    public receiveNum!: number

  /**
   * 需要送达客户总数量
   */
    public receiveTotalNum!: number

  /**
   * 群发内容
   */
    public replyContentDto!: ReplyContentDTO

  /**
   * 选择客户 1全部 2筛选客户
   */
    public selectType!: number

  /**
   * 已发送员工数量
   */
    public sendNum!: number

  /**
   * 发送状态 -1 发送失败 0未发送 1发送成功
   */
    public sendStatus!: number

  /**
   * 发送时间
   */
    public sendTime!: number

  /**
   * 需要发送员工总数量
   */
    public sendTotalNum!: number

  /**
   * 发送类型 1立即发送 2定时发送
   */
    public sendType!: number

  /**
   * 群发员工名称列表
   */
    public staffNameList!: string[]

  /**
   * 客户接受上限数量
   */
    public upperLimitNum!: number

}
