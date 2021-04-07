

export default class ContentCommonGroupDTO {

  /**
   * 1企业内共享 0个人创建 不传查全部
   */
    public shared?: number

  /**
   * 状态（仅商品） 1上架 0下架, 不传查全部
   */
    public status?: number

  /**
   * 名称
   */
    public title?: string

  /**
   * 1文章 2文件 3表单 4商品 7链接 8小程序 9邀请有礼 10海报
   */
    public type?: number

}
