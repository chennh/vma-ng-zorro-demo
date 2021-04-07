import ContentStaffRelaBO from './ContentStaffRelaBO'
import CustomerProgressBO from './CustomerProgressBO'
import HandlerStaffBO from './HandlerStaffBO'


export default class MissionDetailBO {

  /**
   * 任务内容（json格式）
   */
    public attribute!: string

  /**
   * 任务开始时间
   */
    public beginTime!: number

  /**
   * 分享任务内容二维码
   */
    public contentStaffRelaBo!: ContentStaffRelaBO

  /**
   * -
   */
    public createType!: number

  /**
   * 客户任务进度
   */
    public customerProgress!: CustomerProgressBO[]

  /**
   * 任务结束时间
   */
    public endTime!: number

  /**
   * 已完成任务数
   */
    public fishNum!: number

  /**
   * 是否跟进人处理 1是（无跟进人由指定处理人处理） 0否
   */
    public handleFollower!: number

  /**
   * 跟进人（员工id）
   */
    public handleIds!: number[]

  /**
   * 处理人任务进度列表
   */
    public handlerStaffs!: HandlerStaffBO[]

  /**
   * 是否展示结束按钮
   */
    public isUpdateOver!: number

  /**
   * 发送类型
   */
    public sendType!: number

  /**
   * 目标人数
   */
    public shareTargetNum!: number

  /**
   * 任务状态
   */
    public status!: number

  /**
   * 任务标题内容
   */
    public textContent!: string

  /**
   * 总任务数
   */
    public total!: number

  /**
   * 任务类型
   */
    public type!: number

}
