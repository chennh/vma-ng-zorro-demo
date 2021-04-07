import ContentActiviteUpdateREQ from './ContentActiviteUpdateREQ'
import ContentPoster from './ContentPoster'


export default class ContentStaffRelaBO {

  /**
   * 邀请有礼信息
   */
    public contentActivite!: ContentActiviteUpdateREQ

  /**
   * 内容id 数据库属性:int(128)
   */
    public contentId!: number

  /**
   * 海报信息
   */
    public contentPoster!: ContentPoster

  /**
   * 内容标题
   */
    public contentTitle!: string

  /**
   * 公司名字 数据库属性:varchar(128)
   */
    public enterpriseName!: string

  /**
   * 个人头像
   */
    public headIcon!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 个人姓名 数据库属性:varchar(128)
   */
    public name!: string

  /**
   * 是否展示手机号 1是 0否 数据库属性:int(2)
   */
    public phoneShow!: number

  /**
   * 分享地址
   */
    public shareUrl!: string

  /**
   * 分享uuid 用于生成二维码
   */
    public shareUuid!: string

  /**
   * 是否展示咨询入口 1是 0否
   */
    public showStaffCard!: number

  /**
   * 微名片id
   */
    public staffCardId!: number

  /**
   * 1文章 2文件 3表单 4商品 5名片 6微小站 7 h5链接 8小程序 9邀请有礼 10海报
   */
    public type!: number

  /**
   * 是否展示微信信息 1是 0否 数据库属性:int(2)
   */
    public wechatShow!: number

}
