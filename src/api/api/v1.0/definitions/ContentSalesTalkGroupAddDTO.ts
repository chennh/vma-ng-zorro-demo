

export default class ContentSalesTalkGroupAddDTO {

  /**
   * 部门id,多个用逗号分隔
   */
    public departmentId?: string

  /**
   * 父id 空表示一级分组 数据库属性:int(128)
   */
    public parentId?: number

  /**
   * 1企业话术库 0个人话术库 数据库属性:int(11)
   */
    public shared!: number

  /**
   * 话术分组标题 数据库属性:varchar(128)
   */
    public title!: string

  /**
   * 可见范围 1全部员工 2部门可见 数据库属性:int(11)
   */
    public visibleRange?: number

}
