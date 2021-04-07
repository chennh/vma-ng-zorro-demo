

export default class EnterPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 企业名称
   */
    public name?: string

  /**
   * 企业所有者
   */
    public ownerName?: string

  /**
   * 签约状态 -2签约失败 -1未签约 0试用 1已签约
   */
    public status?: number

  /**
   * 是否到期 1是 0否
   */
    public isOverdue?: number

}
