

export default class PosterInfoBO {

  /**
   * 活动状态 1进行中 2结束
   */
    public activityStatus!: number

  /**
   * 海报地址
   */
    public posterUrl!: string

  /**
   * 关联ID,这个字段为空，查看助力进度不能点击
   */
    public relateId!: number

}
