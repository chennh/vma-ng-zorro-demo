

export default class ContentarticlesstaffrelaPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * -
   */
    public id!: number

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 更新时间
   */
    public updateTime!: number

  /**
   * 状态 1启用 0禁用
   */
    public status!: number

  /**
   * 企业id
   */
    public enterpriseId!: number

  /**
   * 创建者id
   */
    public operatorId!: number

  /**
   * 微名片id
   */
    public staffCardId!: number

  /**
   * 文章id
   */
    public articlesId!: number

  /**
   * 是否展示咨询入口 1是 0否
   */
    public showStaffCard!: number

  /**
   * 分享uuid 用于生成二维码
   */
    public shareUuid!: string

}
