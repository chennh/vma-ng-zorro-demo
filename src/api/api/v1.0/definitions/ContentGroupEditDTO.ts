

export default class ContentGroupEditDTO {

  /**
   * 部门id,多个用逗号分隔 数据库属性:int(128)
   */
    public departmentId?: string

  /**
   * id
   */
    public id!: number

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
   * 内容类型1文章2文件3表单4商品7链接8小程序9邀请有利10海报11群打卡13多媒体
   */
    public type!: number

  /**
   * 可见范围 1全部员工 2部门可见 数据库属性:int(11)
   */
    public visibleRange?: number

}
