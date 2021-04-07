import SettingBO from './SettingBO'


export default class DrainageCustomerSettingBO {

  /**
   * 超时未添加
   */
    public timeOutUnAdd!: SettingBO

  /**
   * 超时未添加客户分配兜底员工
   */
    public timeOutUnAddDistribution!: SettingBO

  /**
   * 超时未分配
   */
    public timeOutUnDistribution!: SettingBO

}
