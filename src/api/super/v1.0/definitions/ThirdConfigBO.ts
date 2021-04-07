

export default class ThirdConfigBO {

  /**
   * EncodingAESKey
   */
    public aesKey!: string

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
   * 第三方应用ID
   */
    public suiteId!: string

  /**
   * 第三方应用密钥
   */
    public suiteSecret!: string

  /**
   * token
   */
    public token!: string

  /**
   * 第三方应用（企业微信app）可信域名
   */
    public wxAppDomain!: string

  /**
   * 应用主页
   */
    public wxAppUrl!: string

}
