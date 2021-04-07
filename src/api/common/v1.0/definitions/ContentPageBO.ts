

export default class ContentPageBO {

  /**
   * 分享小程序链接
   */
    public appletsUrl!: string

  /**
   * 1已经收藏 0或者空未收藏
   */
    public collectionStatus!: number

  /**
   * 文件类型（仅文件有） 1.excel 2.pdf 3.word 4.ppt
   */
    public filesType!: string

  /**
   * 分享H5链接
   */
    public h5Url!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 图片
   */
    public img!: string

  /**
   * 源素材链接
   */
    public linkUrl!: string

  /**
   * 显示价格（仅商品有）
   */
    public price!: string

  /**
   * 真实价格（仅商品有）
   */
    public realPrice!: number

  /**
   * 状态(仅表单有) 0未开始 1进行中 2已结束
   */
    public status!: string

  /**
   * 标题
   */
    public title!: string

  /**
   * 1文章 2文件 3表单 4商品 7链接 8小程序 9邀请有礼 10海报
   */
    public type!: number

}
