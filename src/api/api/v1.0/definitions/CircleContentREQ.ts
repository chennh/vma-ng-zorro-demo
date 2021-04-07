

export default class CircleContentREQ {

  /**
   * 内容
   */
    public content?: string

  /**
   * -
   */
    public customPictureUrl?: string

  /**
   * 自定义图片url地址
   */
    public customPictureUrls?: string[]

  /**
   * 是否添加素材
   */
    public isAddMaterial?: number

  /**
   * 资源素材名称
   */
    public mediaContent?: string

  /**
   * 目标素材ID（当type为0是可以为空
   */
    public targetId?: number

  /**
   * 102自定义图片 1文章 2文件 3表单 4商品 5名片 6微小站 7链接 8小程序 9邀请有礼 10海报库
   */
    public type?: number

}
