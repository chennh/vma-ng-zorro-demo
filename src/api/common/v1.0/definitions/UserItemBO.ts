

export default class UserItemBO {

  /**
   * 公司名称
   */
    public corpName!: string

  /**
   * 头像
   */
    public headImg!: string

  /**
   * id
   */
    public id!: number

  /**
   * 系统内部名称
   */
    public name!: string

  /**
   * 员工是否开通会话留存功能 0否 1是
   */
    public openChatStatus!: number

  /**
   * 类型 1客户 2员工
   */
    public type!: number

  /**
   * 企业微信名称
   */
    public wxName!: string

  /**
   * 企业微信ID
   */
    public wxUserId!: string

}
