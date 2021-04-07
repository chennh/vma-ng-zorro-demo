import ContentSalesTalkBodyLinkDTO from './ContentSalesTalkBodyLinkDTO'


export default class ContentSalesTalkH5Detail {

  /**
   * 话术内容 数据库属性:int(2)
   */
    public bodyJson!: ContentSalesTalkBodyLinkDTO[]

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 话术标题 数据库属性:varchar(128)
   */
    public title!: string

}
