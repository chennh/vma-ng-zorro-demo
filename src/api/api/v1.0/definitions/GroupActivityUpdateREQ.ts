import CustomerParamDTO from './CustomerParamDTO'
import GroupActivityTaskJsonDTO from './GroupActivityTaskJsonDTO'


export default class GroupActivityUpdateREQ {

  /**
   * 参与活动是否自动打标签 1是 0否 数据库属性:int(2)
   */
    public autoTag!: number

  /**
   * 活动开始时间 数据库属性:datetime
   */
    public beginTime!: number

  /**
   * 标签列表
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * 活动结束时间 数据库属性:datetime
   */
    public endTime!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

  /**
   * 活动图片 数据库属性:varchar(256)
   */
    public img!: string

  /**
   * 参与活动标签 多个标签用逗号分隔 数据库属性:varchar(1024)
   */
    public labels!: string

  /**
   * 客服二维码 数据库属性:varchar(256)
   */
    public qrCode!: string

  /**
   * 活动规则 数据库属性:varchar(500)
   */
    public rule!: string

  /**
   * 任务信息
   */
    public taskJsonDto!: GroupActivityTaskJsonDTO[]

  /**
   * 任务类型 1连续打卡 2累计打卡 数据库属性:int(2)
   */
    public taskType!: number

  /**
   * 活动名称 数据库属性:varchar(20)
   */
    public title!: string

  /**
   * 分享摘要 数据库属性:varchar(20)
   */
    public wechatText!: string

  /**
   * 分享封面图 数据库属性:varchar(128)
   */
    public wechatThumbUrl!: string

  /**
   * 分享标题 数据库属性:varchar(10)
   */
    public wechatTitle!: string

}
