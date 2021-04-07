import CustomerInfoFollowListBO from './CustomerInfoFollowListBO'
import GroupMessageBO from './GroupMessageBO'


export default class PushDetailBO {

  /**
   * 外部联系人信息
   */
    public customerInfoFollowList!: CustomerInfoFollowListBO[]

  /**
   * 推送的群聊信息
   */
    public groupMessage!: GroupMessageBO[]

  /**
   * 群聊数
   */
    public groupNum!: number

  /**
   * 规则名称
   */
    public ruleName!: string

  /**
   * 发送时间
   */
    public senTime!: number

  /**
   * 创建人
   */
    public staffName!: string

}
