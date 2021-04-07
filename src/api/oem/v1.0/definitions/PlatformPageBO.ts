

export default class PlatformPageBO {

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * -
   */
    public id!: number

  /**
   * 是否绑定配置企业微信第三方
   */
    public isBoundWxEnter!: number

  /**
   * 是否绑定配置微信第三方
   */
    public isBoundWxOpen!: number

  /**
   * 联系人
   */
    public linkMan!: string

  /**
   * 联系电话
   */
    public mobilePhone!: string

  /**
   * 代理商名称
   */
    public platformName!: string

  /**
   * 工位数
   */
    public stationNum!: number

  /**
   * 状态
   */
    public status!: number

}
