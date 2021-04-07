

export default class StaffPageBO {

  /**
   * 部门名称
   */
    public departmentNames!: string

  /**
   * 企业微信ID
   */
    public extId!: string

  /**
   * 头像
   */
    public headIcon!: string

  /**
   * 员工ID
   */
    public id!: number

  /**
   * 是否是企业最高管理者 1是 0否
   */
    public isAdmin!: number

  /**
   * 是否是部门负责人
   */
    public isHead!: number

  /**
   * 电话
   */
    public mobilePhone!: string

  /**
   * 角色名称
   */
    public roleName!: string

  /**
   * 员工姓名
   */
    public staffName!: string

  /**
   * 状态0禁用 1启用
   */
    public status!: number

  /**
   * 企业微信状态
   */
    public wxStatus!: number

}
