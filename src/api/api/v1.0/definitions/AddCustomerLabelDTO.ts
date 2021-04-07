

export default class AddCustomerLabelDTO {

  /**
   * 客户id
   */
    public customerId?: number

  /**
   * -
   */
    public relateId?: number

  /**
   * 关联类型 1文章 2文件  3海报 4表单 5商品 6邀请有礼 7员工活码 8领取商品打标签 9链接 10群活码 11参与邀请有礼 12通过邀请有礼审核 13不通过邀请有礼审核 1
   * 4邀请有礼完成任务
   */
    public relateType?: number

}
