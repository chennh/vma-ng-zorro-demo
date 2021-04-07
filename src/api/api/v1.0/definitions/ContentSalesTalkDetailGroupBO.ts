import ContentSalesTalkDetailBO from './ContentSalesTalkDetailBO'


export default class ContentSalesTalkDetailGroupBO {

  /**
   * 下级分组
   */
    public children!: ContentSalesTalkDetailGroupBO[]

  /**
   * int(11)
   */
    public id!: number

  /**
   * 1企业话术库 0个人话术库
   */
    public shared!: number

  /**
   * 话术列表
   */
    public talkList!: ContentSalesTalkDetailBO[]

  /**
   * 话术分组标题
   */
    public title!: string

}
