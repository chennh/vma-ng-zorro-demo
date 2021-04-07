

export default class UpdateAgentREQ {

  /**
   * 自建应用AgentId
   */
    public agentId?: number

  /**
   * 自建应用secret
   */
    public agentSecret?: string

  /**
   * 通讯录secret
   */
    public communicationSecret?: string

  /**
   * 企业ID（微信企业号的appid）
   */
    public corpId?: string

  /**
   * 客户secret
   */
    public customerSecret?: string

}
