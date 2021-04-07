

export default class StaffJoinApplyBO {

  /**
   * 申请时间
   */
    public applyTime!: number

  /**
   * 申请表ID
   */
    public id!: number

  /**
   * 手机号码
   */
    public mobilePhone!: string

  /**
   * 姓名
   */
    public name!: string

  /**
   * 职业
   */
    public position!: string

  /**
   * 备注
   */
    public remark!: string

  /**
   * 操作状态0待操作 1已添加 2忽略
   */
    public status!: number

}
