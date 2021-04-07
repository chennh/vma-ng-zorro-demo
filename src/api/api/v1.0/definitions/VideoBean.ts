

export default class VideoBean {

  /**
   * 资源的文件大小
   */
    public filesize!: number

  /**
   * 资源的md5值，供进行校验
   */
    public md5sum!: string

  /**
   * 视频播放长度
   */
    public playLength!: number

  /**
   * 媒体资源的id信息
   */
    public sdkfileid!: string

}
