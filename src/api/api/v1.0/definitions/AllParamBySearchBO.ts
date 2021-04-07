import CustomerParamOptions from './CustomerParamOptions'
import SearchChildOptionBO from './SearchChildOptionBO'
import AllParamBO from './AllParamBO'


export default class AllParamBySearchBO {

  /**
   * 1客户资料 2跟进阶段
   */
    public category!: number

  /**
   * -
   */
    public id!: number

  /**
   * 是否默认显示
   */
    public isDefault!: number

  /**
   * 选项列表
   */
    public optionsList!: CustomerParamOptions[]

  /**
   * 字段标识
   */
    public paramKey!: string

  /**
   * 参数名称
   */
    public paramName!: string

  /**
   * 参数类型 1 单行文本 2多行文本 3数字 4单选标签 5多选标签 8日期 9时间 10日期+时间 11带颜色的标签
   */
    public paramType!: string

  /**
   * 参数类型名称
   */
    public paramTypeName!: string

  /**
   * 是否必填
   */
    public required!: number

  /**
   * 搜索选项列表
   */
    public searchOptionList!: SearchChildOptionBO[]

  /**
   * 跟进阶段选项
   */
    public stageOptionList!: AllParamBO[]

  /**
   * 微信id
   */
    public wecomId!: string

}
