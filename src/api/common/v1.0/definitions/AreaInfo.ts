

export default class AreaInfo {

  /**
   * 编号 数据库属性:varchar(16)
   */
    public areaCode!: string

  /**
   * 名称 数据库属性:varchar(200)
   */
    public areaName!: string

  /**
   * 城市id 数据库属性:int(11)
   */
    public cityId!: number

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * id 数据库属性:int(11)
   */
    public id!: number

  /**
   * 省id 数据库属性:int(11)
   */
    public provinceId!: number

}
