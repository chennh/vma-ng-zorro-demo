

export default class GroupChatPageBO {

  /**
   * 企业微信群ID
   */
    public chatId!: string

  /**
   * 状态 1正常 2解散
   */
    public chatStatus!: number

  /**
   * 创建时间
   */
    public createTime!: string

  /**
   * 表ID
   */
    public id!: number

  /**
   * 总人数
   */
    public memberCount!: number

  /**
   * 群名称
   */
    public name!: string

  /**
   * 群管理员
   */
    public ownerName!: string

  /**
   * 今日流失
   */
    public todayDown!: number

  /**
   * 今日新增
   */
    public todayUp!: number

}
