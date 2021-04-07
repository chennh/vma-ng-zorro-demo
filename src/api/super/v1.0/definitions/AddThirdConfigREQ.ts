

export default class AddThirdConfigREQ {

  /**
   * EncodingAESKey
   */
    public aesKey?: string

  /**
   * 服务商ID
   */
    public platformId?: number

  /**
   * 第三方应用ID
   */
    public suiteId?: string

  /**
   * 第三方应用密钥
   */
    public suiteSecret?: string

  /**
   * token
   */
    public token?: string

  /**
   * 第三方应用（企业微信app）可信域名
   */
    public wxAppDomain?: string

}
