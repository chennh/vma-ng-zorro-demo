import DownRuleChildConfigDTO from './DownRuleChildConfigDTO'


export default class DownRuleConfigDTO {

  /**
   * 配置规则
   */
    public configRule?: DownRuleChildConfigDTO

  /**
   * 1启用 0禁用
   */
    public configSwitch?: string

}
