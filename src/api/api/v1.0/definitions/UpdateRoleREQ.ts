

export default class UpdateRoleREQ {

  /**
   * id
   */
    public id!: string

  /**
   * 角色名称
   */
    public name!: string

  /**
   * 功能权限资源ID集合
   */
    public resourceActionList?: string[]

  /**
   * 菜单资源ID集合
   */
    public resourceMenuList?: string[]

  /**
   * 状态，1-启用 0-禁用
   */
    public status?: number

}
