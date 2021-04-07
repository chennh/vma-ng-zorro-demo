import GroupWarningChatAddDTO from './GroupWarningChatAddDTO'


export default class GroupWarningAddREQ {

  /**
   * 行为提醒 image:发送带二维码图片 link:发送链接分享 weapp:发送小程序 card:发送名片 text:文本
   */
    public behaviorTypeList?: string[]

  /**
   * 群聊列表
   */
    public chatList?: GroupWarningChatAddDTO[]

  /**
   * 关键字集合
   */
    public keyWordList?: string[]

  /**
   * 方案名称
   */
    public name!: string

}
