

export default class GroupActivityTaskJsonDTO {

  /**
   * 数据库属性:datetime
   */
    public createTime?: number

  /**
   * 是否领取礼物 1已领取 0未领取 数据库属性:int(11)
   */
    public status?: number

  /**
   * 任务阶段 第一阶段就传1 第二阶段传2 ...
   */
    public taskLevel!: number

  /**
   * 打卡天数
   */
    public times!: number

}
