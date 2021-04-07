import CustomerParamDTO from './CustomerParamDTO'


export default class MaintainLabelREQ {

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 导入批次编号
   */
    public importCoding?: string

  /**
   * 标签id 多个用逗号分隔 数据库属性:varchar(128)
   */
    public labels?: string

}
