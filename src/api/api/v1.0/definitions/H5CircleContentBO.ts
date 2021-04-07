

export default class H5CircleContentBO {

  /**
   * 发送内容
   */
    public content!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 自定义图片/海报
   */
    public customPictureUrls!: string[]

  /**
   * id
   */
    public id!: number

  /**
   * 标题
   */
    public mediaContent!: string

  /**
   * 分享链接
   */
    public shareUrl!: string

  /**
   * 素材ID
   */
    public targetId!: number

  /**
   * 距离当前时间数
   */
    public time!: string

  /**
   * 内容类型
   */
    public type!: number

}
