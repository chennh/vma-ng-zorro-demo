

export default class FriendDeleteLogUpdateREQ {

  /**
   * 数据库属性:varchar(200)
   */
    public handleRemark!: string

  /**
   * 处理状态 0 1合规 2违规 3忽略 数据库属性:int(11)
   */
    public handleType!: number

  /**
   * 数据库属性:int(11)
   */
    public id!: number

}
