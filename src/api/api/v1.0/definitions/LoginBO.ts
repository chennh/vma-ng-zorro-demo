import LoginEnterpriseBO from './LoginEnterpriseBO'
import LoginStaffBO from './LoginStaffBO'
import PlatformLoginBO from './PlatformLoginBO'
import PlatformDomainInfoBO from './PlatformDomainInfoBO'
import RbacResourceActionBO from './RbacResourceActionBO'
import RbacResourceMenuBO from './RbacResourceMenuBO'


export default class LoginBO {

  /**
   * 内容模块是否开启审核功能 true开启 false未开启
   */
    public audit!: boolean

  /**
   * 当前账号的所有企业集合
   */
    public entList!: LoginEnterpriseBO[]

  /**
   * 当前登录的企业
   */
    public enterpriseBo!: LoginEnterpriseBO

  /**
   * 是否是主账号 1是 0否
   */
    public isPrimary!: number

  /**
   * 企业账号信息
   */
    public loginStaffBo!: LoginStaffBO

  /**
   * mackey
   */
    public macKey!: string

  /**
   * 平台账号信息
   */
    public platformAccountBo!: PlatformLoginBO

  /**
   * 域名相关信息
   */
    public platformDomainInfoBo!: PlatformDomainInfoBO

  /**
   * 功能权限
   */
    public resourceActionList!: RbacResourceActionBO[]

  /**
   * 菜单权限
   */
    public resourceMenuList!: RbacResourceMenuBO[]

  /**
   * 账号类型 1超级后台、2贴牌 3代理 4企业
   */
    public type!: number

}
