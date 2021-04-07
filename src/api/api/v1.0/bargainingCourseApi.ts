import axios, { AxiosRequestConfig } from 'axios'
import BargainingCourseAllShareParam from './params/BargainingCourseAllShareParam'
import BargainCoursesCountBO from './definitions/BargainCoursesCountBO'
import BargainingCourseBargainSharePageParam from './params/BargainingCourseBargainSharePageParam'
import Page from './definitions/Page'
import BargainSharePageBO from './definitions/BargainSharePageBO'
import BargainingCourseBargainStaffSharePageParam from './params/BargainingCourseBargainStaffSharePageParam'
import BargainStaffSharePageBO from './definitions/BargainStaffSharePageBO'
import ActivityBargainCoursesAddREQ from './definitions/ActivityBargainCoursesAddREQ'
import ActivityBargainCoursesUpdateREQ from './definitions/ActivityBargainCoursesUpdateREQ'
import BargainingCourseEndingParam from './params/BargainingCourseEndingParam'
import BargainingCourseMyShareParam from './params/BargainingCourseMyShareParam'
import BargainingCourseSidebarPageParam from './params/BargainingCourseSidebarPageParam'
import ActivityBargainCoursesBO from './definitions/ActivityBargainCoursesBO'
import BargainingCoursePageParam from './params/BargainingCoursePageParam'
import BargainingCourseSendParam from './params/BargainingCourseSendParam'
import BargainingCourseUserGiftPageParam from './params/BargainingCourseUserGiftPageParam'
import UserGiftPageBO from './definitions/UserGiftPageBO'
import BargainingCourseManageUserHelpRecordListParam from './params/BargainingCourseManageUserHelpRecordListParam'
import UserHelpListBO from './definitions/UserHelpListBO'
import BargainingCourseUserHelpPageParam from './params/BargainingCourseUserHelpPageParam'
import BargainingCourseDetailParam from './params/BargainingCourseDetailParam'
import ActivityBargainCoursesDetailBO from './definitions/ActivityBargainCoursesDetailBO'
import BargainingCourseDelParam from './params/BargainingCourseDelParam'

export class BargainingCourseApi {

  /**
   * 发起砍价所有分享统计
   *
   * @param { BargainingCourseAllShareParam } params
   * @reutrn { Promise<BargainCoursesCountBO> }
   */
  public static allShare(
    params: BargainingCourseAllShareParam,
    config?: AxiosRequestConfig): Promise<BargainCoursesCountBO> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/allShare/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发起砍价所有的分享列表
   *
   * @param { BargainingCourseBargainSharePageParam } params
   * @reutrn { Promise<Page<BargainSharePageBO>> }
   */
  public static bargainSharePage(
    params: BargainingCourseBargainSharePageParam,
    config?: AxiosRequestConfig): Promise<Page<BargainSharePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/bargain/share/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 发起砍价-所有分享-分享员工
   *
   * @param { BargainingCourseBargainStaffSharePageParam } params
   * @reutrn { Promise<Page<BargainStaffSharePageBO>> }
   */
  public static bargainStaffSharePage(
    params: BargainingCourseBargainStaffSharePageParam,
    config?: AxiosRequestConfig): Promise<Page<BargainStaffSharePageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/bargain/staff/share/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 新增
   *
   * @param { ActivityBargainCoursesAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static save(
    data: ActivityBargainCoursesAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/create`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 编辑
   *
   * @param { ActivityBargainCoursesUpdateREQ } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: ActivityBargainCoursesUpdateREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/edit`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 结束课程
   *
   * @param { BargainingCourseEndingParam } params
   * @reutrn { Promise<void> }
   */
  public static ending(
    params: BargainingCourseEndingParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/ending/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 发起砍价我的分享统计
   *
   * @param { BargainingCourseMyShareParam } params
   * @reutrn { Promise<BargainCoursesCountBO> }
   */
  public static myShare(
    params: BargainingCourseMyShareParam,
    config?: AxiosRequestConfig): Promise<BargainCoursesCountBO> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/myShare/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 砍价企业微信侧边栏获取分页
   *
   * @param { BargainingCourseSidebarPageParam } params
   * @reutrn { Promise<Page<ActivityBargainCoursesBO>> }
   */
  public static sidebarPage(
    params: BargainingCourseSidebarPageParam,
    config?: AxiosRequestConfig): Promise<Page<ActivityBargainCoursesBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 砍价课程分页数据
   *
   * @param { BargainingCoursePageParam } params
   * @reutrn { Promise<Page<ActivityBargainCoursesBO>> }
   */
  public static page(
    params: BargainingCoursePageParam,
    config?: AxiosRequestConfig): Promise<Page<ActivityBargainCoursesBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/query`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 砍价企业微信侧边栏发送
   *
   * @param { BargainingCourseSendParam } params
   * @reutrn { Promise<string> }
   */
  public static send(
    params: BargainingCourseSendParam,
    config?: AxiosRequestConfig): Promise<string> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/send/${params.id}`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 领取礼品分享-所有/我的分享
   *
   * @param { BargainingCourseUserGiftPageParam } params
   * @reutrn { Promise<Page<UserGiftPageBO>> }
   */
  public static userGiftPage(
    params: BargainingCourseUserGiftPageParam,
    config?: AxiosRequestConfig): Promise<Page<UserGiftPageBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/user/gift/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 某个发起砍价客户的砍价助力详情
   *
   * @param { BargainingCourseManageUserHelpRecordListParam } params
   * @reutrn { Promise<Page<UserHelpListBO>> }
   */
  public static manageUserHelpRecordList(
    params: BargainingCourseManageUserHelpRecordListParam,
    config?: AxiosRequestConfig): Promise<Page<UserHelpListBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/user/help`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 助力砍价分享-所有/我的分享
   *
   * @param { BargainingCourseUserHelpPageParam } params
   * @reutrn { Promise<Page<UserHelpListBO>> }
   */
  public static userHelpPage(
    params: BargainingCourseUserHelpPageParam,
    config?: AxiosRequestConfig): Promise<Page<UserHelpListBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/user/help/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 获取详情
   *
   * @param { BargainingCourseDetailParam } params
   * @reutrn { Promise<ActivityBargainCoursesDetailBO> }
   */
  public static detail(
    params: BargainingCourseDetailParam,
    config?: AxiosRequestConfig): Promise<ActivityBargainCoursesDetailBO> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 删除信息
   *
   * @param { BargainingCourseDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: BargainingCourseDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/bargaining_course/${data.id}`,
      method: 'delete',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
