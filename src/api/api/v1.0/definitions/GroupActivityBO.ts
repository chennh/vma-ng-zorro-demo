import ActivityShareInfoBO from './ActivityShareInfoBO'


export default class GroupActivityBO {

  /**
   * 参与活动/领取礼品信息
   */
    public activityShareInfoBo!: ActivityShareInfoBO

  /**
   * 活动开始时间
   */
    public beginTime!: number

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 创建者
   */
    public operatorName!: string

  /**
   * 状态 0未开始 1进行中 2结束
   */
    public status!: number

  /**
   * 活动名称
   */
    public title!: string

}
