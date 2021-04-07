import CustomerParamDTO from './CustomerParamDTO'


export default class ContentActiviteTaskDTO {

  /**
   * 完成任务自动打标签 1是 0否
   */
    public autoTag!: number

  /**
   * 兑奖说明
   */
    public body?: string

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * 商品id
   */
    public goodId!: number

  /**
   * 商品封面
   */
    public goodImg!: string

  /**
   * 商品名称
   */
    public goodName!: string

  /**
   * 有id就传 没有就不传(新增的时候没有id, 编辑的时候可能会有id)
   */
    public id?: number

  /**
   * 标签id,多个逗号分隔
   */
    public labels?: string

  /**
   * 任务名称
   */
    public name!: string

  /**
   * 目标人数
   */
    public targetCount!: number

}
