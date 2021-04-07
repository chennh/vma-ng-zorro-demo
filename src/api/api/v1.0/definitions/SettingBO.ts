

export default class SettingBO {

  /**
   * 超过的天数
   */
    public exceedDay!: number

  /**
   * 次日提醒的时间
   */
    public remindTime!: number

  /**
   * 接受提醒的员工ID/分配给的员工ID
   */
    public staffId!: number

  /**
   * 1勾选 0未勾选
   */
    public status!: number

  /**
   * 设置类型 1企业超时未分配跟进成员 2员工超时未添加客户提醒 3员工超时未添加客户分配兜底员工
   */
    public type!: number

}
