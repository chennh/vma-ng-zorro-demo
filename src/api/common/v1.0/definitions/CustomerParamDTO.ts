import ContentFormFieldsBO from './ContentFormFieldsBO'


export default class CustomerParamDTO {

  /**
   * 字段信息-表单模块专用
   */
    public formFieldsBo?: ContentFormFieldsBO

  /**
   * 选中的选项id,多个用逗号分隔-表单模块专用
   */
    public optionId?: string

  /**
   * 多选标签的值
   */
    public optionValue?: string

  /**
   * 参数字段id
   */
    public paramId?: number

  /**
   * 参数拓展
   */
    public paramJson?: string

  /**
   * 参数标识
   */
    public paramKey?: string

  /**
   * 参数数字拓展
   */
    public paramNum?: number

  /**
   * 参数类型
   */
    public paramType?: number

  /**
   * 参数内容 如果是标签 存标签id 多个用逗号分隔
   */
    public paramValue?: string

}
