import CustomerParamOptionsDTO from './CustomerParamOptionsDTO'


export default class UpdateParamDTO {

  /**
   * -
   */
    public id?: number

  /**
   * 选项列表
   */
    public optionsList?: CustomerParamOptionsDTO[]

  /**
   * 参数名称
   */
    public paramName?: string

  /**
   * 参数状态
   */
    public paramStatus?: number

}
