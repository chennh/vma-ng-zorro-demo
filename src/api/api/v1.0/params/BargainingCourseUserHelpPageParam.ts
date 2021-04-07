

export default class BargainingCourseUserHelpPageParam {

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
   * 查询类型 所有分享ALL  我的分享MINE
   */
    public type?: string

}
