import CustomerListDTO from './CustomerListDTO'


export default class CustomerModifyStatusDTO {

  /**
   * 是否全选操作
   */
    public batchDo?: boolean

  /**
   * 客户id列表
   */
    public cidList?: number[]

  /**
   * 0全部 1潜在 2 待分配   3跟进中 4公海 5我跟进的  6我协助的
   */
    public customerType?: number

  /**
   * 全选参数
   */
    public params?: CustomerListDTO

  /**
   * 员工id
   */
    public staffId?: number

  /**
   * 状态 1潜在 2 待分配   3跟进中 4公海
   */
    public status?: number

}
