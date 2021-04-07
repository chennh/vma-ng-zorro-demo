import ChatMessage from './ChatMessage'


export default class QueryTargetChatBO {

  /**
   * 之后消息
   */
    public afterMessage!: ChatMessage[]

  /**
   * 之前消息
   */
    public beforeMessage!: ChatMessage[]

  /**
   * 当前查询消息
   */
    public message!: ChatMessage

}
