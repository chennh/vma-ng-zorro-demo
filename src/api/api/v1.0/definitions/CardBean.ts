

export default class CardBean {

  /**
   * 名片所有者所在的公司名称
   */
    public corpname!: string

  /**
   * 名片所有者的id，同一公司是userid，不同公司是external_userid
   */
    public userid!: string

}
