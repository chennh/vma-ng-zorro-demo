import ContentPageBO from './ContentPageBO'


export default class ContentCommonGroupBO {

  /**
   * 下级分组
   */
    public children!: ContentCommonGroupBO[]

  /**
   * 内容列表
   */
    public contentList!: ContentPageBO[]

  /**
   * int(11)
   */
    public id!: number

  /**
   * 1企业话术库 0个人话术库
   */
    public shared!: number

  /**
   * 话术分组标题
   */
    public title!: string

}
