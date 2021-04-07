

export default class RedCustomerLimitDTO {

  /**
   * 每日用户领取个数上限 数据库属性:decimal(10,2)
   */
    public countMax?: number

  /**
   * 数据库属性:int(11)
   */
    public id?: number

  /**
   * 每日用户领取金额上限 数据库属性:decimal(10,2)
   */
    public moneyMax?: number

}
