

export default class ContentAppletBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 图片链接
   */
    public imgUrl!: string

  /**
   * 小程序标题
   */
    public name!: string

  /**
   * 创建人
   */
    public operatorName!: string

  /**
   * 是否同步到企业链接库 1是 0否
   */
    public shared!: number

}
