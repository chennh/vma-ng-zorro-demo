

export default class GroupChat {

  /**
   * 企业微信群ID 数据库属性:varchar(128)
   */
    public chatId!: string

  /**
   * 状态 1正常 2解散
   */
    public chatStatus!: number

  /**
   * 创建时间 数据库属性:mediumtext
   */
    public createTime!: string

  /**
   * 数据库属性:int(11)
   */
    public enterpriseId!: number

  /**
   * 表ID 数据库属性:int(11)
   */
    public id!: number

  /**
   * -
   */
    public memberCount!: number

  /**
   * 群名称 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 群通知 数据库属性:varchar(256)
   */
    public notice!: string

  /**
   * 群管理员ID
   */
    public owerStaffId!: number

  /**
   * 群管理员 数据库属性:varchar(56)
   */
    public ownerName!: string

  /**
   * 群管理员ID 数据库属性:varchar(128)
   */
    public ownerUserId!: string

  /**
   * 数据库属性:int(11)
   */
    public platformId!: number

  /**
   * -
   */
    public sysCreateTime!: number

}
