

export default class UpdateQrcodeChatGroupListDTO {

  /**
   * 群成员人数
   */
    public addNum?: number

  /**
   * 微信群ID
   */
    public chatId?: string

  /**
   * id
   */
    public id?: number

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

  /**
   * 群状态 -1停用 0未开始 1拉人中 2拉满
   */
    public status?: number

}
