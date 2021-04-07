

export default class AddCustomerDTO {

  /**
   * 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType?: string

  /**
   * 成员id
   */
    public memberId?: number

  /**
   * 跟进人id
   */
    public staffId?: number

}
