

export default class SetFriendNoticeConfigDTO {

  /**
   * 通知频率 0每次 1每天一次
   */
    public noticeCount?: number

  /**
   * 通知员工id列表
   */
    public noticeStaffId?: string

  /**
   * 通知类型 0未删除 1被员工删除 2被客户删除
   */
    public noticeType?: number

  /**
   * 状态 0关闭 1开启
   */
    public status?: number

}
