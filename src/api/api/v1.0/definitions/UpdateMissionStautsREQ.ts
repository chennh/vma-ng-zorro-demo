

export default class UpdateMissionStautsREQ {

  /**
   * 任务ID
   */
    public id?: number

  /**
   * 任务状态 5已结束
   */
    public status?: number

  /**
   * 任务类型 1我下发的 2我待办的
   */
    public type?: number

}
