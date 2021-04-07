

export default class CicleDetailBO {

  /**
   * 发送内容
   */
    public content!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * -
   */
    public customPictureUrl!: string

  /**
   * 自定义图片/海报地址
   */
    public customPictureUrls!: string[]

  /**
   * 是否添加素材 1是 0否
   */
    public isAddMaterial!: number

  /**
   * 资源素材名称
   */
    public mediaContent!: string

  /**
   * 创建者
   */
    public operatorName!: string

  /**
   * 发送状态
   */
    public sendStatus!: number

  /**
   * 发送时间
   */
    public sendTime!: number

  /**
   * 发送类型 1立即 2定时发送
   */
    public sendType!: number

  /**
   * 同步朋友圈员工姓名
   */
    public staffNames!: string[]

  /**
   * 发送素材ID
   */
    public targetId!: number

  /**
   * 内容类型 1文章 2文件 3表单 4商品 5名片 6微小站 7 h5链接 8小程序 9邀请有礼 10海报 101外部链接(无用) 102自定义图片
   */
    public type!: number

}
