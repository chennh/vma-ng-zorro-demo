import GroupLabelCreateChatDetailBO from './GroupLabelCreateChatDetailBO'
import CustomerChildFiterDTO from './CustomerChildFiterDTO'


export default class GroupLabelCreateInfoDetailBO {

  /**
   * 群聊列表
   */
    public chatList!: GroupLabelCreateChatDetailBO[]

  /**
   * 内容
   */
    public content!: string

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
   * 邀请客户数量
   */
    public inviteNum!: number

  /**
   * 邀请客户总数量
   */
    public inviteTotalNum!: number

  /**
   * 已入群数量
   */
    public joinGroup!: number

  /**
   * 需要入群客户总数量
   */
    public joinTotalGroup!: number

  /**
   * 标签名称集合
   */
    public labelList!: CustomerChildFiterDTO[]

  /**
   * 满足条件客户数量
   */
    public matchNum!: number

  /**
   * 任务名称
   */
    public name!: string

  /**
   * 未邀请客户数量
   */
    public notInviteNum!: number

  /**
   * 未入群客户数量
   */
    public notJoinGroup!: number

  /**
   * 未发送员工数量
   */
    public notSendNum!: number

  /**
   * 选择客户类型 1全部 2筛选客户
   */
    public selectType!: number

  /**
   * 已发送员工数量
   */
    public sendNum!: number

  /**
   * 发送员工总数量
   */
    public sendTotalNum!: number

  /**
   * 群发员工名称列表
   */
    public staffNames!: string[]

}
