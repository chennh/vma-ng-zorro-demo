import AgreeBean from './AgreeBean'
import CalendarBean from './CalendarBean'
import CardBean from './CardBean'
import ChatrecordBean from './ChatrecordBean'
import CollectBean from './CollectBean'
import DisagreeBean from './DisagreeBean'
import DocBean from './DocBean'
import EmotionBean from './EmotionBean'
import FileBean from './FileBean'
import ImageBean from './ImageBean'
import InfoBean from './InfoBean'
import LinkBean from './LinkBean'
import LocationBean from './LocationBean'
import MeetingBean from './MeetingBean'
import MeetingVoiceCallBean from './MeetingVoiceCallBean'
import MixedBean from './MixedBean'
import RedpacketBean from './RedpacketBean'
import RevokeBean from './RevokeBean'
import TextBean from './TextBean'
import TodoBean from './TodoBean'
import VideoBean from './VideoBean'
import VoiceBean from './VoiceBean'
import VoipDocShareBean from './VoipDocShareBean'
import VoteBean from './VoteBean'
import WeappBean from './WeappBean'


export default class ChatMessage {

  /**
   * 消息动作
   */
    public action!: string

  /**
   * 同意会话留存对象
   */
    public agree!: AgreeBean

  /**
   * 日程对象
   */
    public calendar!: CalendarBean

  /**
   * 名片对象
   */
    public card!: CardBean

  /**
   * 会话记录
   */
    public chatrecord!: ChatrecordBean

  /**
   * 填表对象
   */
    public collect!: CollectBean

  /**
   * 拒绝会话留存对象
   */
    public disagree!: DisagreeBean

  /**
   * 在线文档对象
   */
    public doc!: DocBean

  /**
   * 表情对象
   */
    public emotion!: EmotionBean

  /**
   * 文件对象
   */
    public file!: FileBean

  /**
   * 文件存储路径
   */
    public fileUrl!: string

  /**
   * 消息发送
   */
    public from!: string

  /**
   * -
   */
    public fromType!: number

  /**
   * 图片对象
   */
    public image!: ImageBean

  /**
   * MarkDown格式消息/图文消息
   */
    public info!: InfoBean

  /**
   * 链接对象
   */
    public link!: LinkBean

  /**
   * 位置对象
   */
    public location!: LocationBean

  /**
   * 会议邀请对象
   */
    public meeting!: MeetingBean

  /**
   * 音频存档消息对象
   */
    public meetingVoiceCall!: MeetingVoiceCallBean

  /**
   * 混合消息
   */
    public mixed!: MixedBean

  /**
   * 消息ID
   */
    public msgid!: string

  /**
   * 消息发送时间戳
   */
    public msgtime!: number

  /**
   * 消息类型
   */
    public msgtype!: string

  /**
   * 红包消息对象
   */
    public redpacket!: RedpacketBean

  /**
   * 撤销对象
   */
    public revoke!: RevokeBean

  /**
   * 群聊ID
   */
    public roomid!: string

  /**
   * 文本消息内容
   */
    public text!: TextBean

  /**
   * 消息发送时间戳（切换企业）
   */
    public time!: number

  /**
   * -
   */
    public toType!: number

  /**
   * 待办对象
   */
    public todo!: TodoBean

  /**
   * 消息接收方列表
   */
    public tolist!: string[]

  /**
   * 切换企业的成员userId（切换企业）
   */
    public user!: string

  /**
   * 视频对象
   */
    public video!: VideoBean

  /**
   * 语言对象
   */
    public voice!: VoiceBean

  /**
   * 音频共享文档类型
   */
    public voipDocShare!: VoipDocShareBean

  /**
   * 音频id
   */
    public voipid!: string

  /**
   * 投票对象
   */
    public vote!: VoteBean

  /**
   * 小程序消息
   */
    public weapp!: WeappBean

}
