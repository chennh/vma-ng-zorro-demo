

export default class WxAuthUrlREQ {

  /**
   * 域名信息
   */
    public domain?: string

  /**
   * 发送类型（发送临时素材是用）
   */
    public sendType?: string

  /**
   * 员工ID
   */
    public staffId?: string

  /**
   * 1侧边栏 2朋友圈
   */
    public type?: number

  /**
   * 重定向地址
   */
    public url?: string

}
