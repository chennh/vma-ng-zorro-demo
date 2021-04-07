

export default class ContentsalestalkGroupKeyListParam {

  /**
   * 用户ID（企业微信中的账号）
   */
    public userId!: string

  /**
   * 群id 与好友id二选1
   */
    public chatId?: string

  /**
   * 好友id 与群id二选一
   */
    public friendId?: string

  /**
   * 是否共享 1是 0否
   */
    public shared?: number

}
