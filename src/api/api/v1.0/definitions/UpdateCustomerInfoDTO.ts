import CustomerParamDTO from './CustomerParamDTO'


export default class UpdateCustomerInfoDTO {

  /**
   * 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType?: number

  /**
   * 扩展json字段
   */
    public ext?: CustomerParamDTO[]

  /**
   * id
   */
    public id?: number

}
