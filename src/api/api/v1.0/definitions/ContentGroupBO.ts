

export default class ContentGroupBO {

  /**
   * 下级分组
   */
    public children!: ContentGroupBO[]

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
