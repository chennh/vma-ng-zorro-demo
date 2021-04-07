import ActionTimeOutDTO from './ActionTimeOutDTO'


export default class SensitiveActionInfoDetailBO {

  /**
   * 监控行为 1撤回 2超时回复
   */
    public actionTypeList!: number[]

  /**
   * -
   */
    public id!: number

  /**
   * 超时对象
   */
    public timeoutList!: ActionTimeOutDTO[]

}
