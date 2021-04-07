

export default class OemLoginConfigBO {

  /**
   * 域名
   */
    public domain!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 版权说明
   */
    public instructions!: string

  /**
   * 登录页背景
   */
    public loginBackground!: string

  /**
   * 图片logo
   */
    public loginLogo!: string

  /**
   * 不带名字logo
   */
    public loginLogoIcon!: string

  /**
   * 名字logo
   */
    public loginNameLogo!: string

  /**
   * 服务商ID
   */
    public platformId!: number

  /**
   * 备案号
   */
    public record!: string

  /**
   * 技术支持
   */
    public technicalSupport!: string

}
