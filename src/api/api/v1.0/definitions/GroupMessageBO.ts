import H5PushContentBO from './H5PushContentBO'


export default class GroupMessageBO {

  /**
   * 企业微信群ID
   */
    public chatId!: string

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 群成员数量
   */
    public groupMemberNum!: number

  /**
   * id
   */
    public id!: number

  /**
   * 群名称
   */
    public name!: string

  /**
   * 群主名称
   */
    public ownerName!: string

  /**
   * 推送内容
   */
    public pushContents!: H5PushContentBO[]

  /**
   * 1已完成 0未完成
   */
    public status!: number

}
