import ContentSortInfo from './ContentSortInfo'


export default class ContentFilesPageREQ {

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
   * 文件名称
   */
    public filesName?: string

  /**
   * 个人分组id
   */
    public groupId?: number

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
   * 审核状态 1通过 2未通过 0未审核
   */
    public status?: number

}
