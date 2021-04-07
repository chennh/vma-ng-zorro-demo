import AllParamBO from './AllParamBO'


export default class StageParamByKeyBO {

  /**
   * 无效选项
   */
    public invalidOption!: AllParamBO

  /**
   * 输单选项
   */
    public loseOption!: AllParamBO

  /**
   * 跟进阶段选项
   */
    public stageOption!: AllParamBO[]

}
