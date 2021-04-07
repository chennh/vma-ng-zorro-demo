import ChatGroupListDetailBO from './ChatGroupListDetailBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class QrcodeChatGroupPageBO {

  /**
   * 群列表
   */
    public chatGroupList!: ChatGroupListDetailBO[]

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 添加好友数
   */
    public friendNum!: number

  /**
   * ID
   */
    public id!: number

  /**
   * 标签集合
   */
    public labelList!: ParamOptionObjBO[]

  /**
   * 拉群方式 1 群二维码拉群 2企微活码拉群
   */
    public pullWay!: number

  /**
   * 群活码图片
   */
    public qrcodeImg!: string

  /**
   * 二维码名称
   */
    public qrcodeName!: string

  /**
   * 使用成员
   */
    public staffNameList!: string[]

  /**
   * 入群引导语
   */
    public welcomeContent!: string

}
