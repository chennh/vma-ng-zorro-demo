import CustomerParamOptions from './CustomerParamOptions'


export default class AllParamBO {

  /**
   * 1客户资料 2跟进阶段
   */
    public category!: number

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 内容是否可编辑
   */
    public editable!: number

  /**
   * 编辑者名称
   */
    public editorName!: string

  /**
   * -
   */
    public id!: number

  /**
   * 是否默认显示
   */
    public isDefault!: number

  /**
   * 是否可以排序
   */
    public isSort!: number

  /**
   * 最大选项数量
   */
    public maxOptionCount!: number

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
   * 参数状态
   */
    public paramStatus!: number

  /**
   * 参数类型 1 单行文本 2多行文本 3数字 4单选标签 5多选标签 8日期 9时间 10日期+时间 11带颜色的标签
   */
    public paramType!: string

  /**
   * 参数类型名称
   */
    public paramTypeName!: string

  /**
   * 是否前置，前置项不可删除
   */
    public preset!: number

  /**
   * 是否必填
   */
    public required!: number

  /**
   * 排序
   */
    public sort!: number

  /**
   * 状态是否可编辑
   */
    public statusEditable!: number

  /**
   * 更新时间
   */
    public updateTime!: number

}
