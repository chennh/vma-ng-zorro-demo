import GroupMember from './GroupMember'


export default class GroupChatDetailsBO {

  /**
   * 群成员总数
   */
    public allCount!: number

  /**
   * 企业微信群ID
   */
    public chatId!: string

  /**
   * 创建时间
   */
    public createTime!: string

  /**
   * int(11)
   */
    public enterpriseId!: number

  /**
   * 表ID
   */
    public id!: number

  /**
   * 退群成员
   */
    public leaveMemberList!: GroupMember[]

  /**
   * 群内成员
   */
    public memberList!: GroupMember[]

  /**
   * 群名称
   */
    public name!: string

  /**
   * 群通知
   */
    public notice!: string

  /**
   * 群管理员
   */
    public ownerName!: string

  /**
   * int(11)
   */
    public platformId!: number

  /**
   * 今日流失
   */
    public todayDown!: number

  /**
   * 今日新增
   */
    public todayUp!: number

}
