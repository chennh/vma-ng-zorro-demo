import GroupLabelCreateChatListDTO from './GroupLabelCreateChatListDTO'
import CustomerChildFiterDTO from './CustomerChildFiterDTO'
import StaffListDTO from './StaffListDTO'


export default class GroupLabelCreateInfoCountREQ {

  /**
   * 群聊列表
   */
    public chatList?: GroupLabelCreateChatListDTO[]

  /**
   * 内容
   */
    public content?: string

  /**
   * 标签集合
   */
    public labelList?: CustomerChildFiterDTO[]

  /**
   * 任务名称
   */
    public name?: string

  /**
   * 选择客户类型 1全部 2筛选客户
   */
    public selectType?: number

  /**
   * 群发员工列表
   */
    public staffList?: StaffListDTO[]

}
