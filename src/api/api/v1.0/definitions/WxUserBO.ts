

export default class WxUserBO {

  /**
   * 姓名
   */
    public name!: string

  /**
   * 微信useid
   */
    public userId!: string

  /**
   * 1=已激活，2=已禁用，4=未激活，5=退出企业
   */
    public wxStatus!: number

}
