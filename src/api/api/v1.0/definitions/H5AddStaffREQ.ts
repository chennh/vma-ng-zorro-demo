

export default class H5AddStaffREQ {

  /**
   * 验证码
   */
    public code?: string

  /**
   * 企业ID
   */
    public enterpriseId?: number

  /**
   * 唯一索引，校验时传回
   */
    public index?: string

  /**
   * 电话
   */
    public mobilePhone?: string

  /**
   * 职位
   */
    public position?: string

  /**
   * 备注
   */
    public remark?: string

  /**
   * 真实姓名
   */
    public staffName?: string

}
