

export default class UpdatePlatformStatusREQ {

  /**
   * 是否全选 1是 0否
   */
    public isCheckAll?: number

  /**
   * （查询条件）联系人
   */
    public linkMan?: string

  /**
   * 平台ID(当isCkeckAll = 0 时传值)
   */
    public platformIds?: number[]

  /**
   * （查询条件）公司名称
   */
    public platformName?: string

  /**
   * （查询条件）状态
   */
    public status?: number

  /**
   * 状态 1正常 0禁用
   */
    public updateStatus?: number

}
