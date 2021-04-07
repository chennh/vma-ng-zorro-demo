

export default class ReplyContentDTO {

  /**
   * 自定义图片url地址
   */
    public customPictureUrl?: string

  /**
   * 素材内容/标题/图片
   */
    public mediaContent?: string

  /**
   * 回复素材
   */
    public mediaId?: number

  /**
   * 回复素材类型  1文章 2文件 3表单 4商品 5名片 6微小站 7 h5链接 8小程序 9邀请有礼 10海报
   */
    public mediaType?: number

  /**
   * 回复文本
   */
    public replyText?: string

}
