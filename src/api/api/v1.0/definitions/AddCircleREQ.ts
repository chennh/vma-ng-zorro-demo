import CircleContentREQ from './CircleContentREQ'


export default class AddCircleREQ {

  /**
   * 朋友圈内容
   */
    public circleContentReq?: CircleContentREQ

  /**
   * 发送时间 定时发送时传 立即发送不传
   */
    public sendTime?: number

  /**
   * 发送类型 1立即发送 2定时发送
   */
    public sendType?: number

  /**
   * 员工ID集合
   */
    public staffIds?: number[]

}
