import GroupWarningChatAddDTO from './GroupWarningChatAddDTO'


export default class GroupWarningChatREQ {

  /**
   * 群聊列表
   */
    public chatSets!: GroupWarningChatAddDTO[]

  /**
   * 群预警ID
   */
    public groupWarningId?: number

}
