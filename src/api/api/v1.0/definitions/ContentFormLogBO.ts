

export default class ContentFormLogBO {

  /**
   * 字段名
   */
    public paramName!: string

  /**
   * 参数类型 1 单行文本 2多行文本 3数字 4单选标签 5多选标签 8日期 9时间 10日期+时间 11带颜色的标签
   */
    public paramType!: string

  /**
   * 填写内容
   */
    public paramValue!: string

}
