

export default class CityInfo {

  /**
   * 编号 数据库属性:varchar(16)
   */
    public cityCode!: string

  /**
   * 城市名称 数据库属性:varchar(200)
   */
    public cityName!: string

  /**
   * 创建时间 数据库属性:datetime
   */
    public createTime!: number

  /**
   * id 数据库属性:int(11)
   */
    public id!: number

  /**
   * 简拼 数据库属性:varchar(30)
   */
    public jianPin!: string

  /**
   * 省id 数据库属性:int(11)
   */
    public provinceId!: number

  /**
   * 全拼 数据库属性:varchar(30)
   */
    public quanPin!: string

}
