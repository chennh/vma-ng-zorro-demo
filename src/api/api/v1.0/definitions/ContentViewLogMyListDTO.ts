import ContentSortInfo from './ContentSortInfo'


export default class ContentViewLogMyListDTO {

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 排序信息, 默认按时间倒序
   */
    public contentSortInfos!: ContentSortInfo[]

}
