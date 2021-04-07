import BasicInformationBO from './BasicInformationBO'
import PushPlanBO from './PushPlanBO'


export default class PersonalSopBO {

  /**
   * 基础信息
   */
    public basicInformationBo!: BasicInformationBO

  /**
   * 推送计划列表
   */
    public pushPlanBo!: PushPlanBO[]

  /**
   * 规则ID
   */
    public ruleId!: number

}
