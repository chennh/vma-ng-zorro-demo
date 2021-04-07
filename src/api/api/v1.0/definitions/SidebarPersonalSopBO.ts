import H5PushContentBO from './H5PushContentBO'


export default class SidebarPersonalSopBO {

  /**
   * 内容名称
   */
    public contentName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 推送内容
   */
    public pushContents!: H5PushContentBO[]

  /**
   * 规则名称
   */
    public ruleName!: string

  /**
   * 发送时间
   */
    public sendTime!: number

}
