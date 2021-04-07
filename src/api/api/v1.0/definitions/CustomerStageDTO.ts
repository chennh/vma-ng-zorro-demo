

export default class CustomerStageDTO {

  /**
   * 失败跟进id 数据库属性:int(11)
   */
    public failStageOption?: number

  /**
   * 无效选项id 数据库属性:int(11)
   */
    public invalidOption?: number

  /**
   * 输单选项id 数据库属性:int(11)
   */
    public loseOption?: number

  /**
   * 备注
   */
    public remark?: string

  /**
   * 跟进阶段id 数据库属性:int(11)
   */
    public stageOption?: number

}
