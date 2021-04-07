import InviteRecordBO from './InviteRecordBO'


export default class ActivityDetailBO {

  /**
   * 活动ID
   */
    public activityId!: number

  /**
   * 活动状态 1进行中 2结束
   */
    public activityStatus!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * 是否领取奖品 0否 1是
   */
    public isReceive!: number

  /**
   * 被邀请人员列表
   */
    public list!: InviteRecordBO[]

  /**
   * 当前邀请人数
   */
    public nowNum!: number

  /**
   * 邀请好友总人数
   */
    public totalNum!: number

}
