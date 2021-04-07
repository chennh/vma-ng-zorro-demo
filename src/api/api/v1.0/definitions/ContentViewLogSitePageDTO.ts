import ContentSortInfo from './ContentSortInfo'


export default class ContentViewLogSitePageDTO {

  /**
   * 访问开始时间
   */
    public beginTime?: number

  /**
   * 排序信息, 默认按时间倒序
   */
    public contentSortInfos!: ContentSortInfo[]

  /**
   * 页码
   */
    public current!: number

  /**
   * 访问结束时间
   */
    public endTime?: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 分享人id
   */
    public staffId?: number[]

}
