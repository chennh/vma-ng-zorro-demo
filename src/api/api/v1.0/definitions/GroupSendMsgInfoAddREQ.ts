import ReplyContentDTO from './ReplyContentDTO'
import StaffListDTO from './StaffListDTO'


export default class GroupSendMsgInfoAddREQ {

  /**
   * 群发名称
   */
    public name?: string

  /**
   * 群发内容
   */
    public replyContentDto?: ReplyContentDTO

  /**
   * 发送时间
   */
    public sendTime?: number

  /**
   * 群发类型 1立即发送 2定时发送
   */
    public sendType?: number

  /**
   * 群发员工列表
   */
    public staffList?: StaffListDTO[]

}
