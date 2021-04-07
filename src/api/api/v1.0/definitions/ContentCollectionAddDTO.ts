

export default class ContentCollectionAddDTO {

  /**
   * 内容id
   */
    public contentId!: number

  /**
   * 内容封面
   */
    public contentImg!: string

  /**
   * 内容标题
   */
    public contentTitle!: string

  /**
   * 多媒体类型 素材类型 1图片 2音频 3视频
   */
    public mediaType?: number

  /**
   * 分享链接
   */
    public shareUrl!: string

  /**
   * 内容类型1文章2文件3表单4商品7链接8小程序9邀请有利10海报11群打卡13多媒体
   */
    public type!: number

}
