import UpdateSopBO from './UpdateSopBO'


export default class UpdateRuleSopBO {

  /**
   * 规则ID
   */
    public ruleId!: number

  /**
   * 规则名称
   */
    public ruleName!: string

  /**
   * sop信息
   */
    public updateSopBos!: UpdateSopBO[]

}
