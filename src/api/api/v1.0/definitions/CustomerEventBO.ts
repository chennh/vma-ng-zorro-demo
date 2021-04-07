import CustomerEventField from './CustomerEventField'


export default class CustomerEventBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 描述
   */
    public desciption!: string

  /**
   * 类型 1客户动态 2员工跟进记录 3其他
   */
    public eventType!: number

  /**
   * 图标
   */
    public icon!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 操作人id
   */
    public operatorId!: number

  /**
   * 操作人姓名
   */
    public operatorName!: string

  /**
   * 参数列表
   */
    public paramList!: CustomerEventField[]

  /**
   * 子类
   */
    public subCategory!: number

  /**
   * 更新时间
   */
    public updateTime!: number

}
