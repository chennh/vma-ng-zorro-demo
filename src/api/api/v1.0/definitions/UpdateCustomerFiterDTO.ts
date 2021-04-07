import CustomerChildFiterDTO from './CustomerChildFiterDTO'


export default class UpdateCustomerFiterDTO {

  /**
   * 筛选内容
   */
    public filterContent?: CustomerChildFiterDTO[]

  /**
   * -
   */
    public id?: number

  /**
   * 筛选条件名称
   */
    public title?: string

}
