

export default class PushContentBO {

  /**
   * 发送内容
   */
    public content!: string

  /**
   * 自定义图片
   */
    public customPictureUrl!: string

  /**
   * 是否添加素材
   */
    public isAddMaterial!: number

  /**
   * 资源素材名称
   */
    public mediaContent!: string

  /**
   * 发送类型的ID
   */
    public targetId!: number

  /**
   * 发送类型
   */
    public type!: number

}
