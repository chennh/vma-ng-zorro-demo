

export default class BargainingCourseBargainSharePageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 砍价课程id
   */
    public bargainCourseId?: number

  /**
   * 活动状态 砍价进行中ONGOING  砍价成功SUCCESS  砍价失败FAIL
   */
    public status?: string

  /**
   * 查询类型 所有分享ALL  我的分享MINE
   */
    public type?: string

}
