import Lock from './Lock'
import ApacheHttpClientBuilder from './ApacheHttpClientBuilder'


export default class WxMaConfig {

  /**
   * -
   */
    public accessToken!: string

  /**
   * -
   */
    public accessTokenExpired!: boolean

  /**
   * -
   */
    public accessTokenLock!: Lock

  /**
   * -
   */
    public aesKey!: string

  /**
   * -
   */
    public apacheHttpClientBuilder!: ApacheHttpClientBuilder

  /**
   * -
   */
    public appid!: string

  /**
   * -
   */
    public cardApiTicket!: string

  /**
   * -
   */
    public cardApiTicketExpired!: boolean

  /**
   * -
   */
    public cardApiTicketLock!: Lock

  /**
   * -
   */
    public cloudEnv!: string

  /**
   * -
   */
    public expiresTime!: number

  /**
   * -
   */
    public httpProxyHost!: string

  /**
   * -
   */
    public httpProxyPassword!: string

  /**
   * -
   */
    public httpProxyPort!: number

  /**
   * -
   */
    public httpProxyUsername!: string

  /**
   * -
   */
    public jsapiTicket!: string

  /**
   * -
   */
    public jsapiTicketExpired!: boolean

  /**
   * -
   */
    public jsapiTicketLock!: Lock

  /**
   * -
   */
    public msgDataFormat!: string

  /**
   * -
   */
    public originalId!: string

  /**
   * -
   */
    public secret!: string

  /**
   * -
   */
    public token!: string

}
