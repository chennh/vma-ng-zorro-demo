

export default class AddRoleREQ {

  /**
   * 角色名称
   */
    public name?: string

  /**
   * 功能权限资源ID集合
   */
    public resourceActionList?: string[]

  /**
   * 菜单资源ID集合
   */
    public resourceMenuList?: string[]

}
