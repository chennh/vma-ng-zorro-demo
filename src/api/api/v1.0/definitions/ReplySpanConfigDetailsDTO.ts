import ReplyContentDTO from './ReplyContentDTO'


export default class ReplySpanConfigDetailsDTO {

  /**
   * 结束时间
   */
    public endTime?: number

  /**
   * id
   */
    public id?: number

  /**
   * 回复内容
   */
    public replyContentDto?: ReplyContentDTO

  /**
   * 开始时间
   */
    public startTime?: number

  /**
   * 星期集合 1表示周一，以此类推
   */
    public weekday?: number[]

}
