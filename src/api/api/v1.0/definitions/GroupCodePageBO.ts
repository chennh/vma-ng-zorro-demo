

export default class GroupCodePageBO {

  /**
   * 添加好友人数
   */
    public addCount!: number

  /**
   * datetime
   */
    public createTime!: number

  /**
   * 当前群
   */
    public curGroupName!: string

  /**
   * 可用群列表
   */
    public groupNameList!: string[]

  /**
   * int(11)
   */
    public id!: number

  /**
   * int(11)
   */
    public platformId!: number

  /**
   * 活码图片
   */
    public qrcodeImg!: string

  /**
   * 活码名称
   */
    public qrcodeName!: string

}
