

export default class ContentAppletAddREQ {

  /**
   * 图片链接 数据库属性:varchar(128)
   */
    public imgUrl!: string

  /**
   * 小程序标题 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 是否同步到企业链接库 1是 0否 数据库属性:int(11)
   */
    public shared!: number

}
