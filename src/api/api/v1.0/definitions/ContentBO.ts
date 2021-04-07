

export default class ContentBO {

  /**
   * 内容封面图
   */
    public contentCover!: string

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 内容标题
   */
    public contentTitle!: string

  /**
   * 分享uuid 用于生成二维码
   */
    public shareUuid!: string

  /**
   * 内容类型
   */
    public type!: number

}
