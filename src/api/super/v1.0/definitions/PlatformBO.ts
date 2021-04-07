import ConfigUrlDomainBO from './ConfigUrlDomainBO'
import OemLoginConfigBO from './OemLoginConfigBO'


export default class PlatformBO {

  /**
   * 详细地址
   */
    public address!: string

  /**
   * 区ID
   */
    public areaId!: number

  /**
   * 城市ID
   */
    public cityId!: number

  /**
   * 城市名称
   */
    public cityName!: string

  /**
   * h5, webSocket域名信息
   */
    public configUrlDomainBo!: ConfigUrlDomainBO

  /**
   * int(11)
   */
    public id!: number

  /**
   * ip信息
   */
    public ip!: string

  /**
   * 联系人
   */
    public linkMan!: string

  /**
   * 联系电话
   */
    public mobilePhone!: string

  /**
   * 登录页信息
   */
    public oemLoginConfigBo!: OemLoginConfigBO

  /**
   * 平台名称
   */
    public platformName!: string

  /**
   * 省份ID
   */
    public provinceId!: number

  /**
   * 省份名称
   */
    public provinceName!: string

  /**
   * 工位数
   */
    public stationNum!: number

  /**
   * 状态
   */
    public status!: number

  /**
   * 使用中的工位数
   */
    public useStationNum!: number

}
