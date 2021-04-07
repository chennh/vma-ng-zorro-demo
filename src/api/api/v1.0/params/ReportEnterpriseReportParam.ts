

export default class ReportEnterpriseReportParam {

  /**
   * 开始时间
   */
    public startTime?: number

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * 员工列表,多个逗号隔开
   */
    public staffId?: string

  /**
   * 1云呼出 2手机呼出 3手机呼出(中间号)
   */
    public onlineType?: string

}
