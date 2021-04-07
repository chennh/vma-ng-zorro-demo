import WxQrcodeJumpRule from './WxQrcodeJumpRule'


export default class WxGetQrcodeJumpResult {

  /**
   * -
   */
    public errcode!: string

  /**
   * -
   */
    public errmsg!: string

  /**
   * -
   */
    public listSize!: number

  /**
   * -
   */
    public qrcodejumpOpen!: string

  /**
   * -
   */
    public qrcodejumpPubQuota!: number

  /**
   * -
   */
    public ruleList!: WxQrcodeJumpRule[]

  /**
   * -
   */
    public success!: boolean

}
