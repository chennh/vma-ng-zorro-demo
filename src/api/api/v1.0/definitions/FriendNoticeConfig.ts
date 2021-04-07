

export default class FriendNoticeConfig {

  /**
   * 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 数据库属性:int(11)
   */
    public enterpriseId!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 通知频率 0每次 1每天一次 数据库属性:int(1)
   */
    public noticeCount!: number

  /**
   * 通知员工id列表 数据库属性:varchar(300)
   */
    public noticeStaffId!: string

  /**
   * 通知类型 0未删除 1被员工删除 2被客户删除 数据库属性:int(1)
   */
    public noticeType!: number

  /**
   * 状态 0关闭 1开启 数据库属性:int(1)
   */
    public status!: number

}
