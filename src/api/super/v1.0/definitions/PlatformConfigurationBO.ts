

export default class PlatformConfigurationBO {

  /**
   * 数据回调url
   */
    public dataCallBackUrl!: string

  /**
   * 指令回调url
   */
    public instructCallBackUrl!: string

  /**
   * -
   */
    public ip!: string

  /**
   * 应用截图（五张）
   */
    public screenshots!: string[]

  /**
   * 应用主页
   */
    public wxAppUrl!: string

}
