import AssumeRoleResponse from './AssumeRoleResponse'


export default class AliyunOssTokenBO<T = any> {

  /**
   * -
   */
    public bucket!: string

  /**
   * -
   */
    public endpoint!: string

  /**
   * -
   */
    public region!: string

  /**
   * -
   */
    public token!: T

}
