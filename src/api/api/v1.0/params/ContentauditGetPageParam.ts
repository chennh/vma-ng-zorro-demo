

export default class ContentauditGetPageParam {

  /**
   * 内容类型1文章2文件3表单4商品7链接8小程序9邀请有利10海报11群打卡13多媒体
   */
    public type?: number

  /**
   * 内容标题
   */
    public contentTitle?: string

  /**
   * 审核状态 1通过 0未审核 2审核失败
   */
    public status?: number

  /**
   * 开始时间
   */
    public beginTime?: number

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

}
