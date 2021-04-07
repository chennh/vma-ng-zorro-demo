

export default class ContentformShareRankParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 内容id, 如果是微小站 则不用传
   */
    public contentId?: number

  /**
   * 访问开始时间
   */
    public beginTime?: number

  /**
   * 访问结束时间
   */
    public endTime?: number

}
