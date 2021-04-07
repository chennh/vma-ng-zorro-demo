import ConfigUrlDomainREQ from './ConfigUrlDomainREQ'
import UpdateOemLoginConfigREQ from './UpdateOemLoginConfigREQ'


export default class OemAddREQ {

  /**
   * 详细地址
   */
    public address?: string

  /**
   * 区ID
   */
    public areaId?: number

  /**
   * 城市ID
   */
    public cityId?: number

  /**
   * h5域名，domain域名
   */
    public configUrlDomainReq?: ConfigUrlDomainREQ

  /**
   * 联系人
   */
    public linkMan?: string

  /**
   * 联系电话
   */
    public mobilePhone?: string

  /**
   * 服务商名称
   */
    public platformName?: string

  /**
   * 省份ID
   */
    public provinceId?: number

  /**
   * 工位数
   */
    public stationNum?: number

  /**
   * 登录页配置
   */
    public updateOemLoginConfigReq?: UpdateOemLoginConfigREQ

}
