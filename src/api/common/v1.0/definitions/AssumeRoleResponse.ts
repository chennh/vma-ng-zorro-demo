import AssumedRoleUser from './AssumedRoleUser'
import Credentials from './Credentials'


export default class AssumeRoleResponse {

  /**
   * -
   */
    public assumedRoleUser!: AssumedRoleUser

  /**
   * -
   */
    public credentials!: Credentials

  /**
   * -
   */
    public requestId!: string

}
