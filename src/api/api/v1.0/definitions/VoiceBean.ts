

export default class VoiceBean {

  /**
   * 资源的md5值，供进行校验
   */
    public md5sum!: string

  /**
   * 播放长度
   */
    public playLength!: number

  /**
   * 媒体资源的id信息
   */
    public sdkfileid!: string

  /**
   * 语音消息大小
   */
    public voiceSize!: number

}
