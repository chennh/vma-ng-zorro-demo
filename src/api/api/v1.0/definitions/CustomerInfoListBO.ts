import CustomerParamTitleBO from './CustomerParamTitleBO'


export default class CustomerInfoListBO {

  /**
   * 添加渠道
   */
    public addSource!: number

  /**
   * -
   */
    public addSourceStr!: string

  /**
   * 协助时间
   */
    public assignTime!: number

  /**
   * 协助人，多个逗号隔开
   */
    public assistantId!: string

  /**
   * 协助人，多个逗号隔开
   */
    public assistantName!: string

  /**
   * 业务拓展
   */
    public bizJson!: number

  /**
   * 外部联系人所在企业的简称
   */
    public corpName!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 冗余字段-客户头像 数据库属性:varchar(30)
   */
    public customerAvator!: string

  /**
   * 邮箱
   */
    public customerEmail!: string

  /**
   * 冗余字段-客户电话
   */
    public customerMobile!: string

  /**
   * 冗余字段-客户姓名
   */
    public customerName!: string

  /**
   * 1潜在 2 待分配   3跟进中 4公海
   */
    public customerType!: number

  /**
   * 企业id
   */
    public enterpriseId!: number

  /**
   * 扩展json字段
   */
    public ext!: object[]

  /**
   * 失败跟进id 数据库属性:int(11)
   */
    public failStageOption!: number

  /**
   * 跟进人 数据库属性:int(11)
   */
    public followerId!: number

  /**
   * 跟进人 数据库属性:int(11)
   */
    public followerName!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 无效选项id 数据库属性:int(11)
   */
    public invalidOption!: number

  /**
   * 最后一次通话状态
   */
    public lastCallStatus!: number

  /**
   * 最后一次通话时间
   */
    public lastCallTime!: number

  /**
   * 最后一次旅程时间 数据库属性:datetime
   */
    public lastEventTime!: number

  /**
   * 分配数据 数据库属性:datetime
   */
    public lastFollowerTime!: number

  /**
   * 最后一次任务时间
   */
    public lastMissionTime!: number

  /**
   * 输单选项id 数据库属性:int(11)
   */
    public loseOption!: number

  /**
   * 电话归属地 数据库属性:varchar(30)
   */
    public mobileAddr!: string

  /**
   * 成交订单数 数据库属性:int(11)
   */
    public orderCount!: number

  /**
   * 成交订单金额 数据库属性:int(11)
   */
    public orderMoney!: number

  /**
   * 最近成交订单时间 数据库属性:datetime
   */
    public orderTime!: number

  /**
   * -
   */
    public paramTitleObj!: CustomerParamTitleBO

  /**
   * 所属贴牌id
   */
    public platformId!: number

  /**
   * 备注
   */
    public remark!: string

  /**
   * 跟进阶段id 数据库属性:int(11)
   */
    public stageOption!: number

  /**
   * 唯一id
   */
    public uniqueId!: string

  /**
   * 更新时间
   */
    public updateTime!: number

  /**
   * 好友类型 1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
   */
    public userType!: number

  /**
   * 微信添加好友时间 数据库属性:datetime
   */
    public wxAddTime!: number

  /**
   * 微信添加人 数据库属性:int(11)
   */
    public wxFollowerId!: number

  /**
   * 企业微信添加人 数据库属性:varchar(100)
   */
    public wxFollowerNick!: string

  /**
   * 数据库属性:varchar(60)
   */
    public wxGroupChatName!: string

  /**
   * 微信id
   */
    public wxId!: string

  /**
   * 微信昵称
   */
    public wxNick!: string

  /**
   * 微信openid 数据库属性:varchar(50)
   */
    public wxOpenid!: string

  /**
   * 微信unionid
   */
    public wxUnionid!: string

  /**
   * wxUserId 数据库属性:varchar(50)
   */
    public wxUserId!: string

}
