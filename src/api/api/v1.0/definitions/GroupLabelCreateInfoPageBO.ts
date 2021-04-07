

export default class GroupLabelCreateInfoPageBO {

  /**
   * 内容
   */
    public content!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 错误信息
   */
    public errorMsg!: string

  /**
   * -
   */
    public id!: number

  /**
   * 已入群数量
   */
    public joinGroup!: number

  /**
   * 需要入群总数量
   */
    public joinTotalGroup!: number

  /**
   * 任务名称
   */
    public name!: string

  /**
   * 未入群客户数量
   */
    public notJoinGroup!: number

  /**
   * 未发送员工数量
   */
    public notSendNum!: number

  /**
   * 已发送员工数量
   */
    public sendNum!: number

  /**
   * 发送员工总数量
   */
    public sendTotalNum!: number

}
