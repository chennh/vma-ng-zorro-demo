

export default class EnterpriseAuthorMiniPageParam {

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
    public enterpriseName?: string

  /**
   * 状态 -2 提交代码失败 -1提交审核失败 0审核通过 1审核拒绝 2审核中 3撤回 4审核延后 5上传代码成功
   */
    public status?: number

  /**
   * 是否异常 0否 1是
   */
    public isError?: number

  /**
   * 是否企业 0否 1是
   */
    public isEnterprise?: number

}
