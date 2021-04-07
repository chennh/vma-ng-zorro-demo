import CustomerParamDTO from './CustomerParamDTO'
import AddReplySpanConfigDTO from './AddReplySpanConfigDTO'
import ReplyContentDTO from './ReplyContentDTO'
import StaffLimitDTO from './StaffLimitDTO'
import AddStaffSpanConfigDTO from './AddStaffSpanConfigDTO'


export default class UpdateQrcodeStaffCodeDTO {

  /**
   * 允许员工上下线
   */
    public allowManualOffline?: number

  /**
   * 兜底员工id
   */
    public backupStaffId?: number

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
   * id
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
   * 被添加员工在线状态 1全天 2分时段
   */
    public onlineType?: number

  /**
   * 活码头像
   */
    public qrcodeIcon?: string

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
    public replyConfigList?: AddReplySpanConfigDTO[]

  /**
   * 欢迎语内容
   */
    public replyContentDto?: ReplyContentDTO

  /**
   * 员工限制列表
   */
    public staffLimitList?: StaffLimitDTO[]

  /**
   * 员工时段
   */
    public staffSpanConfigList?: AddStaffSpanConfigDTO[]

}
