import CustomerChildFiterDTO from './CustomerChildFiterDTO'
import ReplyContentDTO from './ReplyContentDTO'
import StaffListDTO from './StaffListDTO'


export default class CustomerSendMsgInfoAddREQ {

  /**
   * 标签集合
   */
    public labelList?: CustomerChildFiterDTO[]

  /**
   * 群发名称
   */
    public name?: string

  /**
   * 群发内容
   */
    public replyContentDto?: ReplyContentDTO

  /**
   * 选择客户 1全部 2筛选客户
   */
    public selectType?: number

  /**
   * 发送时间
   */
    public sendTime?: number

  /**
   * 发送类型 1立即发送 2定时发送
   */
    public sendType?: number

  /**
   * 群发员工列表
   */
    public staffList?: StaffListDTO[]

}
