

export default class ContentWeiAppShareParam {

  /**
   * 1文章 2文件 3表单 4商品 7链接 8小程序 9邀请有礼 10海报
   */
    public type?: number

  /**
   * 内容id
   */
    public contentId?: number

  /**
   * 群主ID
   */
    public ownerUserId?: string

  /**
   * 企业ID
   */
    public platformId?: number

}
