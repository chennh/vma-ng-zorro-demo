

export default class ChatConfigBO {

  /**
   * 企业微信会话留存 私钥
   */
    public chatPrivateKey!: string

  /**
   * 企业微信会话留存 公钥
   */
    public chatPublicKey!: string

  /**
   * 企业微信会话留存 secret
   */
    public chatSecret!: string

  /**
   * 密钥版本号
   */
    public publicVersion!: string

}
