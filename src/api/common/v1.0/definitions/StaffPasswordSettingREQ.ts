

export default class StaffPasswordSettingREQ {

  /**
   * 新密码（不管是设置还是修改都要传）
   */
    public newPassword?: string

  /**
   * 旧密码
   */
    public oldPassword?: string

  /**
   * 确认密码
   */
    public reNewPassword?: string

}
