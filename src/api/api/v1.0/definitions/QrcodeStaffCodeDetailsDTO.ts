import CustomerParamDTO from './CustomerParamDTO'
import ParamOptionObjBO from './ParamOptionObjBO'
import StaffLimitBO from './StaffLimitBO'
import ReplySpanConfigDetailsDTO from './ReplySpanConfigDetailsDTO'
import ReplyContentDTO from './ReplyContentDTO'
import StaffStatusBO from './StaffStatusBO'
import StaffSpanConfigDetailsDTO from './StaffSpanConfigDetailsDTO'


export default class QrcodeStaffCodeDetailsDTO {

  /**
   * 添加好友人数
   */
    public addCount?: number

  /**
   * 允许员工上下线
   */
    public allowManualOffline?: number

  /**
   * 欢迎语内容
   */
    public autoReplyContent?: string

  /**
   * 兜底员工id
   */
    public backupStaffId?: number

  /**
   * 兜底员工名称
   */
    public backupStaffName?: string

  /**
   * -
   */
    public createTime?: number

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 加入客户池类型 1潜在 2 待分配   3跟进中 4公海
   */
    public cutomerType?: number

  /**
   * 员工列表 (全天时段时必填)
   */
    public dayStaffIdList?: number[]

  /**
   * -
   */
    public id?: number

  /**
   * 是否开启打标签
   */
    public isAddLabel?: number

  /**
   * 是否自动通过好友
   */
    public isAutoAccess?: number

  /**
   * 是否开启欢迎语
   */
    public isAutoReply?: number

  /**
   * 是否开启添加上限 1是 0否
   */
    public isLimitAdd?: number

  /**
   * 是否开启分时段欢迎语
   */
    public isSpanAutoReply?: number

  /**
   * 标签id集合
   */
    public labelIdList?: string

  /**
   * 标签名称，颜色等信息
   */
    public labelInfo?: ParamOptionObjBO[]

  /**
   * 在线员工列表
   */
    public onlineStaffList?: StaffLimitBO[]

  /**
   * 被添加员工在线状态 1全天 2分时段
   */
    public onlineType?: number

  /**
   * 活码头像
   */
    public qrcodeIcon?: string

  /**
   * 活码图片 数据库属性:varchar(100)
   */
    public qrcodeImg?: string

  /**
   * 活码名称
   */
    public qrcodeName?: string

  /**
   * 二维码开启结束时间
   */
    public qrcodeShowEndTime?: number

  /**
   * 二维码开启开始时间
   */
    public qrcodeShowStartTime?: number

  /**
   * 二维码开启时间状态 0全天 1开启
   */
    public qrcodeShowStatus?: number

  /**
   * 分时段欢迎语列表
   */
    public replyConfigList?: ReplySpanConfigDetailsDTO[]

  /**
   * 欢迎语内容
   */
    public replyContentDto?: ReplyContentDTO

  /**
   * 员工限制列表
   */
    public staffLimitList?: StaffLimitBO[]

  /**
   * 员工列表
   */
    public staffList?: StaffStatusBO[]

  /**
   * 员工时段
   */
    public staffSpanConfigList?: StaffSpanConfigDetailsDTO[]

  /**
   * -
   */
    public updateTime?: number

}
