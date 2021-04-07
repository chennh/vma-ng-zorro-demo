

export default class MissionPageByCustomerParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 是否查询历史任务
   */
    public isHistory?: number

  /**
   * 客户ID
   */
    public customerId?: number

}
