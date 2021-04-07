

export default class AddQrcodeGroupDetailsDTO {

  /**
   * 自动切换人数
   */
    public autoSwitchCount?: number

  /**
   * 群活码id
   */
    public groupCodeId?: number

  /**
   * 群名称
   */
    public groupName?: string

  /**
   * 群二维码解析地址
   */
    public qrcodeText?: string

  /**
   * 群二维码
   */
    public qrcodeUrl?: string

}
