import CustomerParamDTO from './CustomerParamDTO'


export default class UpdateCustomerInfoREQ {

  /**
   * 创建人
   */
    public creatorId?: number

  /**
   * 头像 数据库属性:varchar(30)
   */
    public customerAvator?: string

  /**
   * 地区
   */
    public customerCityName?: string

  /**
   * 1客户池 2待加入客户池
   */
    public customerPosition?: number

  /**
   * -
   */
    public customerSex?: number

  /**
   * 1潜在 2 待分配 3跟进中    4公海 数据库属性:int(1)
   */
    public customerType?: number

  /**
   * 企业id 数据库属性:int(11)
   */
    public enterpriseId?: number

  /**
   * -
   */
    public ext?: CustomerParamDTO[]

  /**
   * 跟进人 数据库属性:int(11)
   */
    public followerId?: number

  /**
   * id
   */
    public id?: number

  /**
   * -
   */
    public relateId?: number

  /**
   * 关联类型 1文章 2文件  3海报 4表单 5商品 6邀请有礼 7员工活码 8领取商品打标签 9链接 10群活码 11参与邀请有礼 12通过邀请有礼审核 13不通过邀请有礼审核 1
   * 4邀请有礼完成任务
   */
    public relateType?: number

  /**
   * 数据库属性:varchar(30) 唯一id
   */
    public uniqueId?: string

  /**
   * 微信id 数据库属性:varchar(30)
   */
    public wxId?: string

  /**
   * 微信昵称 数据库属性:varchar(30)
   */
    public wxNick?: string

  /**
   * 微信openid 数据库属性:varchar(50)
   */
    public wxOpenid?: string

  /**
   * 微信unionid 数据库属性:varchar(50)
   */
    public wxUnionid?: string

  /**
   * wxUserId 数据库属性:varchar(50)
   */
    public wxUserId?: string

}
