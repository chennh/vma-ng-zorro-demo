

export default class RoleDetailBO {

  /**
   * 角色ID
   */
    public id!: string

  /**
   * 角色名称
   */
    public name!: string

  /**
   * 角色拥有的功能权限ID集合
   */
    public resourceActionList!: string[]

  /**
   * 角色拥有的菜单ID集合
   */
    public resourceMenuList!: string[]

}
