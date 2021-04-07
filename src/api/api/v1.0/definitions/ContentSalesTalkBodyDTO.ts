

export default class ContentSalesTalkBodyDTO {

  /**
   * 内容id
   */
    public contentId?: number

  /**
   * 内容封面图
   */
    public contentImg?: string

  /**
   * 内容标题/文本
   */
    public contentTitle?: string

  /**
   * 1文章 2文件 3表单 4商品 5名片 6微小站 7 h5链接 8小程序 9邀请有礼 10海报 101外部链接 102上传二维码 103文本
   */
    public type?: number

}
