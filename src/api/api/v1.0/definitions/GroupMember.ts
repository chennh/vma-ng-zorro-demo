

export default class GroupMember {

  /**
   * 头像
   */
    public avatar!: string

  /**
   * 企业微信群ID 数据库属性:varchar(128)
   */
    public chatId!: string

  /**
   * 群表ID 数据库属性:int(11)
   */
    public groupId!: number

  /**
   * 表id 数据库属性:int(11)
   */
    public id!: number

  /**
   * 是否加入到客户池
   */
    public isAdd!: number

  /**
   * * 入群方式。1 - 由成员邀请入群（直接邀请入群） 2 - 由成员邀请入群（通过邀请链接入群）3 - 通过扫描群二维码入群 数据库属性:int(11)
   */
    public joinScene!: number

  /**
   * 加入时间 数据库属性:mediumtext
   */
    public joinTime!: string

  /**
   * 退出时间 数据库属性:mediumtext
   */
    public leaveTime!: string

  /**
   * 1在群 2退出群
   */
    public status!: number

  /**
   * -
   */
    public sysCreateTime!: number

  /**
   * 成员类型 1企业成员 2外部联系人  3非企业和外部联系人 数据库属性:int(11)
   */
    public type!: number

  /**
   * 用户ID 数据库属性:varchar(64)
   */
    public userId!: string

  /**
   * 用户名称 数据库属性:varchar(64)
   */
    public userName!: string

}
