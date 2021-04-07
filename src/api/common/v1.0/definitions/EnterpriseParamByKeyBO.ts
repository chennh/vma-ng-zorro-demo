import CustomerParamOptions from './CustomerParamOptions'


export default class EnterpriseParamByKeyBO {

  /**
   * 行业
   */
    public industry!: CustomerParamOptions[]

  /**
   * 了解渠道
   */
    public source!: CustomerParamOptions[]

  /**
   * 员工规模
   */
    public staffCount!: CustomerParamOptions[]

}
