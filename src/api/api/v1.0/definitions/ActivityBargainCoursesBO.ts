

export default class ActivityBargainCoursesBO {

  /**
   * 领取礼品所有分享
   */
    public bargainGiftShare!: number

  /**
   * 助力砍价所有分享
   */
    public bargainHelpShare!: number

  /**
   * 领取礼品本人分享
   */
    public bargainMyGiftShare!: number

  /**
   * 助力砍价本人分享
   */
    public bargainMyHelpShare!: number

  /**
   * 发起砍价所有本人分享
   */
    public bargainMyShare!: number

  /**
   * 发起砍价所有分享
   */
    public bargainShare!: number

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * id
   */
    public id!: number

  /**
   * 活动课程名称
   */
    public name!: string

  /**
   * 排序 数据库属性:int(11)
   */
    public sort!: number

  /**
   * 创建人
   */
    public staffName!: string

  /**
   * 活动开始时间
   */
    public startTime!: number

  /**
   * 活动状态
   */
    public status!: string

}
