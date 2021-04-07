

export default class RedPacketMerchantConfigDetailDTO {

  /**
   * 公众号授权id
   */
    public authId?: number

  /**
   * 公众号头像 数据库属性:varchar(256)
   */
    public headIcon?: string

  /**
   * -
   */
    public id?: number

  /**
   * 公众号名称 数据库属性:varchar(128)
   */
    public name?: string

  /**
   * 0订阅号 1由历史老帐号升级后的订阅号 2服务号 数据库属性:int(2)
   */
    public type?: number

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
