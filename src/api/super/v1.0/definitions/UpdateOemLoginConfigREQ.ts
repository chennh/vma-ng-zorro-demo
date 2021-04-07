

export default class UpdateOemLoginConfigREQ {

  /**
   * 域名
   */
    public domain?: string

  /**
   * 配置信息ID
   */
    public id?: number

  /**
   * 版权说明
   */
    public instructions?: string

  /**
   * 登录页背景
   */
    public loginBackground?: string

  /**
   * 登录页logo
   */
    public loginLogo?: string

  /**
   * 不带名字logo
   */
    public loginLogoIcon?: string

  /**
   * 带名字logo
   */
    public loginNameLogo?: string

  /**
   * 备案号
   */
    public record?: string

  /**
   * 技术支持
   */
    public technicalSupport?: string

}
