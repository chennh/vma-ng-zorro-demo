

export default class UpdateProgressStatusREQ {

  /**
   * 任务ID
   */
    public missionId?: number

  /**
   * 任务进度ID
   */
    public progressId?: number

  /**
   * 状态 0未完成 1完成 2忽略
   */
    public status?: number

}
