import ContentMiniSiteNav from './ContentMiniSiteNav'


export default class ContentMiniSiteBO {

  /**
   * 授权类型 1客户点击“咨询”，要求授权手机号 2客户点击任意内容，都要求授权手机号
   */
    public authType!: number

  /**
   * 主色调
   */
    public color!: string

  /**
   * 主色调类型 1系统预设 2自定义
   */
    public colorType!: string

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 页面
   */
    public navList!: ContentMiniSiteNav[]

}
