import ContentSortInfo from './ContentSortInfo'


export default class ContentGoodsPageREQ {

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public auditStatus?: number

  /**
   * 排序信息, 默认按时间倒序
   */
    public contentSortInfos!: ContentSortInfo[]

  /**
   * 页码
   */
    public current!: number

  /**
   * -
   */
    public egroupId?: number

  /**
   * 个人分组id
   */
    public groupId?: number

  /**
   * 商品名称
   */
    public name?: string

  /**
   * 上传人id
   */
    public operatorId?: number

  /**
   * 是否同步到企业文章库 1是 0否
   */
    public shared!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 状态 1上架 0下架 数据库属性:int(11)
   */
    public status?: number

}
