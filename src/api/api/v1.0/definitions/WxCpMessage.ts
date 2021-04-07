import NewArticle from './NewArticle'
import MpnewsArticle from './MpnewsArticle'
import TaskCardButton from './TaskCardButton'


export default class WxCpMessage {

  /**
   * -
   */
    public agentId!: number

  /**
   * -
   */
    public appId!: string

  /**
   * -
   */
    public articles!: NewArticle[]

  /**
   * -
   */
    public btnTxt!: string

  /**
   * -
   */
    public content!: string

  /**
   * -
   */
    public contentItems!: object

  /**
   * -
   */
    public description!: string

  /**
   * -
   */
    public emphasisFirstItem!: boolean

  /**
   * -
   */
    public hqMusicUrl!: string

  /**
   * -
   */
    public mediaId!: string

  /**
   * -
   */
    public mpnewsArticles!: MpnewsArticle[]

  /**
   * -
   */
    public msgType!: string

  /**
   * -
   */
    public musicUrl!: string

  /**
   * -
   */
    public page!: string

  /**
   * -
   */
    public safe!: string

  /**
   * -
   */
    public taskButtons!: TaskCardButton[]

  /**
   * -
   */
    public taskId!: string

  /**
   * -
   */
    public thumbMediaId!: string

  /**
   * -
   */
    public title!: string

  /**
   * -
   */
    public toParty!: string

  /**
   * -
   */
    public toTag!: string

  /**
   * -
   */
    public toUser!: string

  /**
   * -
   */
    public url!: string

}
