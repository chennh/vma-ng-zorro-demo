

export default class DownRuleChildConfigDTO {

  /**
   * 跟进天数
   */
    public followLimitValue?: number

  /**
   * 跟进天数开关 0关闭 1开启
   */
    public followLimited?: number

  /**
   * XX天跟进阶段没变化
   */
    public followStageLimitValue?: number

  /**
   * 跟进阶段开关 0关闭 1开启
   */
    public followStageLimited?: number

  /**
   * -
   */
    public isNotice?: number

  /**
   * 提前通知天数
   */
    public notifyTime?: number

  /**
   * 成单开关 0关闭 1开启
   */
    public successOrderLimitValue?: number

  /**
   * XX天没成单
   */
    public successOrderLimited?: number

}
