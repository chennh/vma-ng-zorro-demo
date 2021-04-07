import CustomerParamDTO from './CustomerParamDTO'


export default class TaskActivityUpdateREQ {

  /**
   * 活动名称
   */
    public activityName!: string

  /**
   * 任务完成人数
   */
    public completeNum!: number

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 添加员工id集合
   */
    public exchangeStaffList!: number[]

  /**
   * -
   */
    public id?: number

  /**
   * 自动通过好友 0否 1是
   */
    public isAutoAdd!: number

  /**
   * 是否打标签 0否 1是
   */
    public isLabel!: number

  /**
   * 链接摘要
   */
    public linkAbstract!: string

  /**
   * 链接封面
   */
    public linkImg!: string

  /**
   * 链接标题
   */
    public linkTitle!: string

  /**
   * 海报地址
   */
    public posterUrl!: string

  /**
   * 添加员工id集合
   */
    public staffList!: number[]

  /**
   * 欢迎语内容
   */
    public welcomeContent!: string

}
