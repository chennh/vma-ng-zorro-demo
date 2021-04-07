

export default class MenuListBO {

  /**
   * 图标
   */
    public menuIcon!: string

  /**
   * 菜单id
   */
    public menuId!: string

  /**
   * 子节点
   */
    public node!: MenuListBO[]

  /**
   * 父菜单id
   */
    public parentId!: string

  /**
   * 资源ID
   */
    public resourceId!: string

  /**
   * 序号
   */
    public sort!: number

  /**
   * 名称
   */
    public title!: string

}
