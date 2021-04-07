

export default class CustomerIdListBO {

  /**
   * 冗余字段-客户头像 数据库属性:varchar(30)
   */
    public customerImg!: string

  /**
   * 冗余字段-客户姓名 数据库属性:varchar(30)
   */
    public customerName!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 是否有编辑权限
   */
    public isEdit!: number

  /**
   * 是否有绑定平安数据
   */
    public isPinganBind!: number

}
