import ContentStaffCardLabelBO from './ContentStaffCardLabelBO'


export default class ContentStaffCardUpdateByIdREQ {

  /**
   * 地址 数据库属性:varchar(128)
   */
    public address?: string

  /**
   * 名片id
   */
    public cardId!: number

  /**
   * 自定义公司名字 数据库属性:varchar(128)
   */
    public customEnterpriseName!: string

  /**
   * 自定义头像 数据库属性:varchar(128)
   */
    public customHeadIcon?: string

  /**
   * 自定义姓名 数据库属性:varchar(128)
   */
    public customName?: string

  /**
   * 自定义手机 数据库属性:varchar(128)
   */
    public customPhone?: string

  /**
   * 自定义内容 数据库属性:text
   */
    public customs?: string

  /**
   * 公司名字 数据库属性:varchar(128)
   */
    public enterpriseName?: string

  /**
   * 1使用公司名字 2自定义 数据库属性:int(2)
   */
    public enterpriseNameType?: number

  /**
   * 个人头像 数据库属性:varchar(128)
   */
    public headIcon?: string

  /**
   * 1使用个人头像 2自定义 数据库属性:int(2)
   */
    public headIconType!: number

  /**
   * 自我介绍 数据库属性:text
   */
    public intro?: string

  /**
   * 标签信息
   */
    public labelInfos?: ContentStaffCardLabelBO[]

  /**
   * labelInfos转json
   */
    public labels?: string

  /**
   * 个人姓名 数据库属性:varchar(128)
   */
    public name?: string

  /**
   * 1使用个人姓名 2自定义 数据库属性:int(2)
   */
    public nameType!: number

  /**
   * 个人手机 数据库属性:varchar(128)
   */
    public phone?: string

  /**
   * 是否展示手机号 1是 0否 数据库属性:int(2)
   */
    public phoneShow!: number

  /**
   * 1使用个人手机 2自定义 数据库属性:int(2)
   */
    public phoneType!: number

  /**
   * 职位 数据库属性:varchar(128)
   */
    public position!: string

  /**
   * 是否展示微小站 1展示 0不展示
   */
    public showMiniSite?: number

  /**
   * 微信二维码url 数据库属性:varchar(128)
   */
    public wechatImgUrl?: string

  /**
   * 微信号 包含字段名,字段类型 是否必填等信息 数据库属性:varchar(128)
   */
    public wechatNum?: string

  /**
   * 是否展示微信信息 1是 0否 数据库属性:int(2)
   */
    public wechatShow!: number

}
