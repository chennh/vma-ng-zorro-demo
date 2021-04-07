import ParamOptionObjBO from './ParamOptionObjBO'
import StaffStatusBO from './StaffStatusBO'


export default class StaffCodePageBO {

  /**
   * 添加好友人数
   */
    public addCount!: number

  /**
   * -
   */
    public backupStaffId!: string

  /**
   * 兜底员工
   */
    public backupStaffName!: string

  /**
   * datetime
   */
    public createTime!: number

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
   * 活码图片
   */
    public qrcodeImg!: string

  /**
   * 活码名称
   */
    public qrcodeName!: string

  /**
   * 渠道码配置的企业员工信息
   */
    public qrcodeSetContent!: string

  /**
   * 上线员工列表
   */
    public staffList!: StaffStatusBO[]

  /**
   * datetime
   */
    public updateTime!: number

}
