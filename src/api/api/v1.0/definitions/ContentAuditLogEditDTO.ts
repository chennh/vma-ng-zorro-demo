

export default class ContentAuditLogEditDTO {

  /**
   * -
   */
    public id!: number

  /**
   * 审核备注
   */
    public remark?: string

  /**
   * 审核状态 1通过 2审核失败
   */
    public status?: number

}
