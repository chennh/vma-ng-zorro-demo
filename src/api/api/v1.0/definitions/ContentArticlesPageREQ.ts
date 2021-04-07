import ContentSortInfo from './ContentSortInfo'


export default class ContentArticlesPageREQ {

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
   * 员工id 查询我创建的文章不用传
   */
    public operatorId?: number

  /**
   * 1企业文章 0我创建的文章
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

  /**
   * 标题
   */
    public title?: string

}
