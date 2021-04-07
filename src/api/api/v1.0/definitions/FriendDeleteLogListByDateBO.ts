

export default class FriendDeleteLogListByDateBO {

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
   * 0未删除 1被员工删除 2被客户删除 3双删
   */
    public delType!: number

  /**
   * 删除时间
   */
    public deleteTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 操作员工
   */
    public staffName!: string

}
