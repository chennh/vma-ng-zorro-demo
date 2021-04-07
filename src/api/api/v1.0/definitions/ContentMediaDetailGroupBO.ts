import ContentMediaDetailBO from './ContentMediaDetailBO'


export default class ContentMediaDetailGroupBO {

  /**
   * 下级分组
   */
    public children!: ContentMediaDetailGroupBO[]

  /**
   * int(11)
   */
    public id!: number

  /**
   * 多媒体列表
   */
    public mediaList!: ContentMediaDetailBO[]

  /**
   * 1企业话术库 0个人话术库
   */
    public shared!: number

  /**
   * 话术分组标题
   */
    public title!: string

}
