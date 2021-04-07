import CustomerChildFiterDTO from './CustomerChildFiterDTO'


export default class PotentialConfigDTO {

  /**
   * 1启用 0禁用
   */
    public configSwitch?: string

  /**
   * 认定条件
   */
    public filterContent?: CustomerChildFiterDTO[]

}
