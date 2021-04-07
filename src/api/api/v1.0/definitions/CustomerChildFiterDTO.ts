

export default class CustomerChildFiterDTO {

  /**
   * 过滤类型
   */
    public filterType?: number

  /**
   * 过滤值
   */
    public filterValue?: string

  /**
   * 参数字段id
   */
    public paramId?: number

  /**
   * paramJson
   */
    public paramJson?: object

  /**
   * 筛选key
   */
    public paramKey?: string

  /**
   * 1-客户资料  2-跟进信息 3流转规则
   */
    public paramSource?: string

  /**
   * 参数类型
   */
    public paramType?: number

}
