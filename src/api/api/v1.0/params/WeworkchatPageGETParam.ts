

export default class WeworkchatPageGETParam {

  /**
   * -
   */
    public staffIdList?: number[]

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 群名称
   */
    public name?: string

  /**
   * -
   */
    public enterpriseId?: number

  /**
   * 0全部 1正常 2解散
   */
    public chatStatus?: number

  /**
   * 员工userid
   */
    public staffUserId?: string

}
