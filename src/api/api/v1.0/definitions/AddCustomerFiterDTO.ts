import CustomerChildFiterDTO from './CustomerChildFiterDTO'


export default class AddCustomerFiterDTO {

  /**
   * 0全部 1潜在 2 待分配   3跟进中 4公海 5我跟进的  6我协助的
   */
    public customerType?: number

  /**
   * 筛选内容
   */
    public filterContent?: CustomerChildFiterDTO[]

  /**
   * 筛选条件名称
   */
    public title?: string

}
