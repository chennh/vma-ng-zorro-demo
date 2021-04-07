

export default class GroupWarningChatQueryBO {

  /**
   * 群聊ID
   */
    public chatId!: string

  /**
   * ID
   */
    public id!: string

  /**
   * 是否已选择 否 false 是 true
   */
    public isSelect!: boolean

  /**
   * 群聊名称
   */
    public name!: string

  /**
   * 群主名称
   */
    public ownerName!: string

  /**
   * 群主企业微信ID
   */
    public ownerUserId!: string

}
