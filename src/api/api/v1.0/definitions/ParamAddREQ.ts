import ParamOptionsAddREQ from './ParamOptionsAddREQ'


export default class ParamAddREQ {

  /**
   * 参数选项
   */
    public optionsList?: ParamOptionsAddREQ[]

  /**
   * 参数名称
   */
    public paramName?: string

  /**
   * 参数类型 1 单行文本 2多行文本 3数字 4单选标签 5多选标签 8日期 9时间 10日期+时间 11带颜色的标签
   */
    public paramType?: string

}
