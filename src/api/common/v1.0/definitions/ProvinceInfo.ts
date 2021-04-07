

export default class ProvinceInfo {

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * id 数据库属性:int(11)
   */
    public id!: number

  /**
   * 编号 数据库属性:varchar(16)
   */
    public provinceCode!: string

  /**
   * 省名称 数据库属性:varchar(200)
   */
    public provinceName!: string

}
