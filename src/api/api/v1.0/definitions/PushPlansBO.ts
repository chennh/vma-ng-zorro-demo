import PushContentBO from './PushContentBO'


export default class PushPlansBO {

  /**
   * 内容名称
   */
    public contentName!: string

  /**
   * 推送内容
   */
    public pushContent!: PushContentBO[]

  /**
   * 推送计划id
   */
    public pushId!: number

  /**
   * 发送时间
   */
    public sendTime!: number

}
