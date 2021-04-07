

export default class ContentcollectionGetPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 内容类型1文章2文件3表单4商品7链接8小程序9邀请有利10海报11群打卡13多媒体
   */
    public type?: number

  /**
   * 内容标题
   */
    public contentTitle?: string

}
