

export default class ContentViewLogReq {

  /**
   * 内容id
   */
    public contentId?: number

  /**
   * 日志类型 1阅读/浏览 2填写/领取
   */
    public logType?: number

  /**
   * 分享人id
   */
    public staffId?: number

  /**
   * 阅读类型 1文章2文件3表单4商品5名片6微小站
   */
    public type?: number

  /**
   * 阅读时长
   */
    public viewTimes?: number

}
