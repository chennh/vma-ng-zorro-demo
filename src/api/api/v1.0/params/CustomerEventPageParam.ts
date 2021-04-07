

export default class CustomerEventPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 客户id
   */
    public customerId?: number

  /**
   * 类型 1客户动态 2员工跟进记录 3其他
   */
    public eventType?: number

}
