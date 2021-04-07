

export default class CustomerInfo {

  /**
   * 添加渠道
   */
    public addSource!: number

  /**
   * 协助时间 数据库属性:datetime
   */
    public assignTime!: number

  /**
   * 协助人，多个逗号隔开
   */
    public assistantId!: string

  /**
   * 外部联系人所在企业的简称
   */
    public corpName!: string

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 创建人id
   */
    public creatorId!: number

  /**
   * 冗余字段-客户头像 数据库属性:varchar(30)
   */
    public customerAvator!: string

  /**
   * 地区
   */
    public customerCityName!: string

  /**
   * 邮箱
   */
    public customerEmail!: string

  /**
   * 冗余字段-客户电话 数据库属性:varchar(30)
   */
    public customerMobile!: string

  /**
   * 冗余字段-客户姓名 数据库属性:varchar(30)
   */
    public customerName!: string

  /**
   * 1客户池 2待加入客户池
   */
    public customerPosition!: number

  /**
   * 1男 2 女 0未知
   */
    public customerSex!: number

  /**
   * 来源
   */
    public customerSource!: string

  /**
   * 1潜在 2 待分配   3跟进中 4公海 数据库属性:int(1)
   */
    public customerType!: number

  /**
   * 企业id 数据库属性:int(11)
   */
    public enterpriseId!: number

  /**
   * 存在的字段id列表
   */
    public existColumnId!: string

  /**
   * 扩展json字段 数据库属性:varchar(500)
   */
    public ext!: string

  /**
   * 失败跟进id 数据库属性:int(11)
   */
    public failStageOption!: number

  /**
   * 跟进人 数据库属性:int(11)
   */
    public followerId!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 无效选项id 数据库属性:int(11)
   */
    public invalidOption!: number

  /**
   * 最后一次通话状态 数据库属性:int(1)
   */
    public lastCallStatus!: number

  /**
   * 最后一次通话时间 数据库属性:datetime
   */
    public lastCallTime!: number

  /**
   * 最后一次旅程时间 数据库属性:datetime
   */
    public lastEventTime!: number

  /**
   * 最后一次分配时间 数据库属性:datetime
   */
    public lastFollowerTime!: number

  /**
   * 最后一次任务时间 数据库属性:datetime
   */
    public lastMissionTime!: number

  /**
   * 最后一次改阶段时间 数据库属性:datetime
   */
    public lastStageTime!: number

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
   * 合并主帐号的id
   */
    public parentId!: number

  /**
   * 所属贴牌id 数据库属性:int(11)
   */
    public platformId!: number

  /**
   * -
   */
    public relateType!: number

  /**
   * 备注 数据库属性:varchar(100)
   */
    public remark!: string

  /**
   * -
   */
    public saveType!: number

  /**
   * 跟进阶段id 数据库属性:int(11)
   */
    public stageOption!: number

  /**
   * 数据库属性:varchar(30)
   */
    public uniqueId!: string

  /**
   * 更新时间 数据库属性:datetime
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
   * 企微添加人 数据库属性:int(11)
   */
    public wxFollowerId!: number

  /**
   * 企业微信添加人（合并专用） 数据库属性:varchar(100)
   */
    public wxFollowerNick!: string

  /**
   * 数据库属性:varchar(60)
   */
    public wxGroupChatName!: string

  /**
   * 数据库属性:varchar(60)
   */
    public wxGroupId!: number

  /**
   * 微信id 数据库属性:varchar(30)
   */
    public wxId!: string

  /**
   * 微信昵称 数据库属性:varchar(30)
   */
    public wxNick!: string

  /**
   * 微信openid 数据库属性:varchar(50)
   */
    public wxOpenid!: string

  /**
   * 微信unionid 数据库属性:varchar(50)
   */
    public wxUnionid!: string

  /**
   * wxUserId 数据库属性:varchar(50)
   */
    public wxUserId!: string

}
