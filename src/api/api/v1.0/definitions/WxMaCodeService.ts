import WxMaCategory from './WxMaCategory'
import WxMaCodeAuditStatus from './WxMaCodeAuditStatus'
import WxMaCodeVersionDistribution from './WxMaCodeVersionDistribution'


export default class WxMaCodeService {

  /**
   * -
   */
    public category!: WxMaCategory[]

  /**
   * -
   */
    public latestAuditStatus!: WxMaCodeAuditStatus

  /**
   * -
   */
    public page!: string[]

  /**
   * -
   */
    public supportVersion!: WxMaCodeVersionDistribution

}
