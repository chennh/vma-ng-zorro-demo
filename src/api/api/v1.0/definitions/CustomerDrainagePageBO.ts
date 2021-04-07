import CustomerParamDTO from './CustomerParamDTO'


export default class CustomerDrainagePageBO {

  /**
   * 添加时间
   */
    public addTime!: number

  /**
   * 标签信息
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * id
   */
    public id!: number

  /**
   * 导入时间
   */
    public importTime!: number

  /**
   * 标签id 多个用逗号分隔
   */
    public labels!: string

  /**
   * 电话
   */
    public phone!: string

  /**
   * 备注
   */
    public remark!: string

  /**
   * 分配的员工ID
   */
    public staffId!: number

  /**
   * 分配的员工名称
   */
    public staffName!: string

  /**
   * staffStatus 1就展示按钮  0就隐藏
   */
    public staffStatus!: number

  /**
   * 状态0待添加1已添加 -1待分配
   */
    public status!: number

}
