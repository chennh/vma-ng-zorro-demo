import ContentActiviteTaskDTO from './ContentActiviteTaskDTO'
import ContentGoodsInviteDTO from './ContentGoodsInviteDTO'
import CustomerParamDTO from './CustomerParamDTO'


export default class ContentActiviteAddREQ {

  /**
   * 活动海报类型 1推荐海报 2本地上传 数据库属性:int(2)
   */
    public activityPosterType!: number

  /**
   * 活动海报图片 数据库属性:varchar(128)
   */
    public activityPosterUrl?: string

  /**
   * 是否手机授权 1是 0否 数据库属性:int(2)
   */
    public authPhone!: number

  /**
   * 是否自动打标签 1是 0否 数据库属性:int(2)
   */
    public autoTag!: number

  /**
   * 不通过审核是否自动打标签 1是 0否 数据库属性:int(2)
   */
    public autoTagNoPass?: number

  /**
   * 通过审核是否自动打标签 1是 0否 数据库属性:int(2)
   */
    public autoTagPass?: number

  /**
   * 活动开始时间 数据库属性:datetime
   */
    public beginTime!: number

  /**
   * 详情 数据库属性:text
   */
    public body?: string

  /**
   * 任务
   */
    public contentActiviteTaskDtos?: ContentActiviteTaskDTO[]

  /**
   * 留资礼
   */
    public contentGoodsInviteDto!: ContentGoodsInviteDTO

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 标签列表
   */
    public customerParamDtosnoPass?: CustomerParamDTO[]

  /**
   * 标签列表
   */
    public customerParamDtospass?: CustomerParamDTO[]

  /**
   * 活动结束时间 数据库属性:datetime
   */
    public endTime!: number

  /**
   * 是否勾选裂变 1是 0否 数据库属性:int(2)
   */
    public fission!: number

  /**
   * 首图 多个图片逗号分隔 数据库属性:varchar(1024)
   */
    public imgs!: string

  /**
   * 邀请海报类型 1推荐海报 2本地上传 数据库属性:int(2)
   */
    public invitePosterType!: number

  /**
   * 邀请海报url 数据库属性:varchar(255)
   */
    public invitePosterUrl!: string

  /**
   * 邀请语 数据库属性:varchar(200)
   */
    public inviteText?: string

  /**
   * 标签 多个标签用逗号分隔 数据库属性:varchar(1024)
   */
    public labels?: string

  /**
   * 不通过审核标签 多个标签用逗号分隔 数据库属性:varchar(1024)
   */
    public labelsNoPass?: string

  /**
   * 通过审核标签 多个标签用逗号分隔 数据库属性:varchar(1024)
   */
    public labelsPass?: string

  /**
   * 引导语 数据库属性:varchar(1024)
   */
    public leadText?: string

  /**
   * 副标题 数据库属性:varchar(140)
   */
    public subTitle?: string

  /**
   * 任务类型 1仅邀请客户留资 2邀请客户留资，并对客户有效性进行审核 数据库属性:int(2)
   */
    public taskType!: number

  /**
   * 标题 数据库属性:varchar(20)
   */
    public title!: string

}
