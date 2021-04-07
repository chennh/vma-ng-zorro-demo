import CustomerParamDTO from './CustomerParamDTO'


export default class UpdateQrcodeCustomerCodeDTO {

  /**
   * 标签列表
   */
    public customerParamDtos?: CustomerParamDTO[]

  /**
   * -
   */
    public id?: number

  /**
   * 是否开启打标签
   */
    public isAddLabel?: number

  /**
   * 标签id集合
   */
    public labelIdList?: string

}
