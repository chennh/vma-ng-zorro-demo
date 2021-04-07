import KeyValueBO from './KeyValueBO'


export default class StatisticalByDayBO {

  /**
   * 曲线图
   */
    public list!: KeyValueBO[]

  /**
   * 累计签约数
   */
    public signingTotal!: number

  /**
   * 今日签约
   */
    public todaySigning!: number

  /**
   * 昨日签约
   */
    public yesterdaySigning!: number

}
