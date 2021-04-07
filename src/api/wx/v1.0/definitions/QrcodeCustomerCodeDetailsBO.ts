import CustomerParamDTO from './CustomerParamDTO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class QrcodeCustomerCodeDetailsBO {

  /**
   * 添加好友人数总
   */
    public addCount!: number

  /**
   * 公司名称
   */
    public companyName!: string

  /**
   * 标签列表
   */
    public customerParamDtos!: CustomerParamDTO[]

  /**
   * 流失数量
   */
    public delCount!: number

  /**
   * int(11)
   */
    public id!: number

  /**
   * 是否开启打标签
   */
    public isAddLabel!: number

  /**
   * 标签id集合
   */
    public labelIdList!: string

  /**
   * 标签名称，颜色等信息
   */
    public labelInfo!: ParamOptionObjBO[]

  /**
   * 二维码图片
   */
    public qrcodeImg!: string

  /**
   * 头像
   */
    public staffAvator!: string

  /**
   * 昵称
   */
    public staffName!: string

}
