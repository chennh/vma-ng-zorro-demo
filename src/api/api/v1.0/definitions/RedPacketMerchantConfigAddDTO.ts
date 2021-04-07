

export default class RedPacketMerchantConfigAddDTO {

  /**
   * 公众号授权id
   */
    public authId?: number

  /**
   * 微信商户号
   */
    public wxMerchantId?: string

  /**
   * 微信支付密钥 数据库属性:varchar(128)
   */
    public wxMerchantKey?: string

  /**
   * 微信支付证书
   */
    public wxPayCert?: string

}
