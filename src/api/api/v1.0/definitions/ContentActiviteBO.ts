import ContentActionLogBO from './ContentActionLogBO'


export default class ContentActiviteBO {

  /**
   * 活动开始时间
   */
    public beginTime!: number

  /**
   * 分享信息
   */
    public contentActionLogBo!: ContentActionLogBO

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * 活动结束时间
   */
    public endTime!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 创建者id
   */
    public operatorName!: string

  /**
   * 状态 1启用 0禁用
   */
    public status!: number

  /**
   * 库存 数据库属性:int(128)
   */
    public stockNum!: number

  /**
   * 标题
   */
    public title!: string

}
