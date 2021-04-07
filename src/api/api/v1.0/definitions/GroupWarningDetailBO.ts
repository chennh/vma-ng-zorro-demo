import GroupWarningChatAddDTO from './GroupWarningChatAddDTO'


export default class GroupWarningDetailBO {

  /**
   * 历史行为提醒次数
   */
    public behaviorNum!: number

  /**
   * 行为提醒
   */
    public behaviorTypeNames!: string

  /**
   * 群聊列表
   */
    public chatList!: GroupWarningChatAddDTO[]

  /**
   * 历史执行群聊数
   */
    public chatNum!: number

  /**
   * 创建者名称
   */
    public createStaffName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 今日行为提醒次数
   */
    public dayBehaviorNum!: number

  /**
   * 今日执行群聊数
   */
    public dayChatNum!: number

  /**
   * 今日关键字次数
   */
    public dayKeyWordNum!: number

  /**
   * -
   */
    public id!: number

  /**
   * 关键字集合
   */
    public keyWordList!: string[]

  /**
   * 历史关键字次数
   */
    public keyWordNum!: number

  /**
   * 方案名称
   */
    public name!: string

  /**
   * 状态 0关闭 1开启
   */
    public status!: number

}
