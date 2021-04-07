import RoleActionBO from './RoleActionBO'
import MenuListBO from './MenuListBO'


export default class RoleResourceBO {

  /**
   * 功能权限
   */
    public resourceActionList!: RoleActionBO[]

  /**
   * 菜单集合
   */
    public resourceMenuList!: MenuListBO[]

}
