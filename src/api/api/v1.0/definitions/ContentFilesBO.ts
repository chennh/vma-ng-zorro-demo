import ContentViewLogBO from './ContentViewLogBO'
import ParamOptionObjBO from './ParamOptionObjBO'


export default class ContentFilesBO {

  /**
   * 浏览人次信息
   */
    public contentViewLogBo!: ContentViewLogBO

  /**
   * 创建时间
   */
    public createTime!: number

  /**
   * 文件图片数据库属性:varchar(128)
   */
    public filesImg!: string

  /**
   * 文件名称
   */
    public filesName!: string

  /**
   * 文件类型 用户显示不同的文件图片 1.excel 2.pdf 3.word 4.ppt
   */
    public filesType!: string

  /**
   * 文件url 用户下载
   */
    public filesUrl!: string

  /**
   * int(11)
   */
    public id!: number

  /**
   * 标签名称，颜色等信息
   */
    public labelInfo!: ParamOptionObjBO[]

  /**
   * 标签名称
   */
    public labelNames!: string[]

  /**
   * 上传人
   */
    public operatorName!: string

  /**
   * 审核备注
   */
    public remark!: string

  /**
   * 审核人
   */
    public staffName!: string

  /**
   * 审核状态 1通过 2未通过 0未审核
   */
    public status!: number

  /**
   * 审核时间
   */
    public updateTime!: number

}
