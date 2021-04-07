

export default class ContentFieldsBO {

  /**
   * 内容图片
   */
    public contentIcon!: string

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 内容标题
   */
    public contentText!: string

  /**
   * 文件类型 1.excel 2.pdf 3.word 4.ppt
   */
    public filesType!: string

  /**
   * 内容类型 1文章 2文件 3表单 4商品 5名片 6微小站 7链接 8小程序 9邀请有礼
   */
    public type!: number

}
