import CustomerParamDTO from './CustomerParamDTO'


export default class AddCustomerInfoDTO {

  /**
   * 业务拓展字段
   */
    public bizJson?: number

  /**
   * -
   */
    public customerName?: string

  /**
   * 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType?: number

  /**
   * 扩展json字段
   */
    public ext?: CustomerParamDTO[]

  /**
   * 跟进人
   */
    public followerId?: number

  /**
   * 跟进员工id
   */
    public staffId?: number

}
