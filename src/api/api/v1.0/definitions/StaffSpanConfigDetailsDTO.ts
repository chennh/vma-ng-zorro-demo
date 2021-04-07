

export default class StaffSpanConfigDetailsDTO {

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * id
   */
    public id?: number

  /**
   * 员工id列表(全时段，只填这一项)
   */
    public staffId?: number[]

  /**
   * 员工名称(回显用)
   */
    public staffName?: string[]

  /**
   * 开始时间
   */
    public startTime?: number

  /**
   * 星期集合 1表示周一，以此类推
   */
    public weekday?: number[]

}
