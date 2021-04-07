import BasicInformationBO from './BasicInformationBO'
import DataStatisticsBO from './DataStatisticsBO'
import PushPlanBO from './PushPlanBO'


export default class GroupSopBO {

  /**
   * 基础信息
   */
    public basicInformationBo!: BasicInformationBO

  /**
   * 数据统计
   */
    public dataStatisticsBo!: DataStatisticsBO

  /**
   * 推送计划
   */
    public pushPlanBo!: PushPlanBO[]

  /**
   * int(11)
   */
    public ruleId!: number

}
