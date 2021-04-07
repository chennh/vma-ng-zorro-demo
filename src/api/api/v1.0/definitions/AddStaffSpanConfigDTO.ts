

export default class AddStaffSpanConfigDTO {

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * 员工id列表
   */
    public staffId?: number[]

  /**
   * 开始时间
   */
    public startTime?: number

  /**
   * 星期集合 1表示周一，以此类推
   */
    public weekday?: number[]

}
