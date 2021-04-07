

export default class FriendDeleteLogDetailsBO {

  /**
   * 该成员添加此客户的来源
   */
    public addWay!: number

  /**
   * 添加时间
   */
    public createTime!: number

  /**
   * 客户头像
   */
    public customerAvator!: string

  /**
   * int(11)
   */
    public customerId!: number

  /**
   * 客户姓名
   */
    public customerName!: string

  /**
   * 客户类型
   */
    public customerType!: number

  /**
   * 0未删除 1被员工删除 2被客户删除 3双删
   */
    public delType!: number

  /**
   * 删除时间
   */
    public deleteTime!: number

  /**
   * -
   */
    public enterpriseId!: number

  /**
   * -
   */
    public followerId!: number

  /**
   * 跟进员工
   */
    public followerName!: string

  /**
   * varchar(200)
   */
    public handleRemark!: string

  /**
   * 处理状态 0未处理 1已处理
   */
    public handleStatus!: number

  /**
   * 处理状态 0 1合规 2违规 3忽略
   */
    public handleType!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 客户是否同意
   */
    public isOpenChat!: number

  /**
   * 员工头像
   */
    public staffAvator!: string

  /**
   * int(11)
   */
    public staffId!: number

  /**
   * 员工是否开启会话
   */
    public staffIsOpenChat!: number

  /**
   * 操作员工
   */
    public staffName!: string

  /**
   * 员工userid
   */
    public staffWxUserId!: string

  /**
   * 客户userid
   */
    public wxUserId!: string

}
