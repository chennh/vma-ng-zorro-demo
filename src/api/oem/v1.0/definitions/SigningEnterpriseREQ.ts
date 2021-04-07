

export default class SigningEnterpriseREQ {

  /**
   * -
   */
    public id?: number

  /**
   * 到期时间
   */
    public overdueTime?: number

  /**
   * 备注
   */
    public remark?: string

  /**
   * 签约状态 1签约成功 -2签约失败
   */
    public signingStatus?: number

  /**
   * 工位数
   */
    public stationNum?: number

  /**
   * 使用年限 -1表示自定义
   */
    public yearLimit?: number

}
