

export default class CustomerEventField {

  /**
   * 客户id 数据库属性:int(11)
   */
    public customerId!: number

  /**
   * 数据库属性:int(11)
   */
    public eventId!: number

  /**
   * 类型 数据库属性:int(1) 1客户动态 2员工跟进记录 3其他
   */
    public eventType!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 关键字 数据库属性:int(11)
   */
    public paramId!: string

  /**
   * 显示标题 数据库属性:varchar(30)
   */
    public paramName!: string

  /**
   * 显示内容 数据库属性:varchar(50)
   */
    public paramValue!: string

  /**
   * 状态 数据库属性:int(1)
   */
    public status!: number

}
