

export default class FriendDeleteLogListByDateDTO {

  /**
   * 时间
   */
    public date!: string

  /**
   * 1被员工删除 2被客户删除
   */
    public delType!: number

  /**
   * -
   */
    public enterpriseId?: number

}
