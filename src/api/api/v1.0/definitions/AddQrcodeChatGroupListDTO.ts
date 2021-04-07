

export default class AddQrcodeChatGroupListDTO {

  /**
   * 群成员人数
   */
    public addNum?: number

  /**
   * 微信群ID
   */
    public chatId?: string

  /**
   * 群人数上限
   */
    public maxNum?: number

  /**
   * 群名称
   */
    public name?: string

  /**
   * 群二维码图片
   */
    public qrcodeGroupImg?: string

}
