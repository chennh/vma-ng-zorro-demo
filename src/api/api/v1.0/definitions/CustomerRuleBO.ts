import ConfigBO from './ConfigBO'


export default class CustomerRuleBO {

  /**
   * 公海回收规则
   */
    public downRule!: ConfigBO

  /**
   * 分配规则
   */
    public followerRule!: ConfigBO

  /**
   * 潜客规则
   */
    public potentialRule!: ConfigBO

}
