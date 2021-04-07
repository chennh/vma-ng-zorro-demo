

export default class SendSmsBO {

  /**
   * 验证码(模拟情况下返回)
   */
    public code!: string

  /**
   * 有效期时间
   */
    public expireTime!: number

  /**
   * 唯一索引，校验时传回
   */
    public index!: string

}
