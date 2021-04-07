import CustomerChildFiterDTO from './CustomerChildFiterDTO'


export default class CustomerListDTO {

  /**
   * 页码
   */
    public current!: number

  /**
   * 客户姓名
   */
    public customerName?: string

  /**
   * 0全部 1潜在 2 待分配   3跟进中 4公海 5我跟进的  6我协助的
   */
    public customerType?: number

  /**
   * 选项条件集合
   */
    public ext?: CustomerChildFiterDTO[]

  /**
   * 选项id
   */
    public filterId?: number

  /**
   * -
   */
    public order?: string

  /**
   * 分页大小
   */
    public size!: number

  /**
   * -
   */
    public sortBy?: string

}
