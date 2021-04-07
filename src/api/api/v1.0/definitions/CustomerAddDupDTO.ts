

export default class CustomerAddDupDTO {

  /**
   * 客户id集合
   */
    public customeIds?: number[]

  /**
   * 指定主客户
   */
    public customerId?: number

  /**
   * 查重字段名称
   */
    public fieldName?: string

  /**
   * 是否自动合并
   */
    public isAuto?: number

  /**
   * 指定跟进人id
   */
    public staffId?: number

}
