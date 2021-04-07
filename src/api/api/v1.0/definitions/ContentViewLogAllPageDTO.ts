import ContentSortInfo from './ContentSortInfo'


export default class ContentViewLogAllPageDTO {

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 排序信息, 默认按时间倒序
   */
    public contentSortInfos!: ContentSortInfo[]

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 分享人id
   */
    public staffId?: number[]

}
