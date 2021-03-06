import axios, { AxiosRequestConfig } from 'axios'
import AddCustomerInfoDTO from './definitions/AddCustomerInfoDTO'
import CustomerInfoListBO from './definitions/CustomerInfoListBO'
import AddCustomerEventByContentDTO from './definitions/AddCustomerEventByContentDTO'
import CustomerCommonDTO from './definitions/CustomerCommonDTO'
import CustomerModifyAssistantsDTO from './definitions/CustomerModifyAssistantsDTO'
import CustomerModifyFollowerDTO from './definitions/CustomerModifyFollowerDTO'
import CustomerModifyLabelDTO from './definitions/CustomerModifyLabelDTO'
import CustomerModifyMoreFollowerDTO from './definitions/CustomerModifyMoreFollowerDTO'
import CustomerModifyStageDTO from './definitions/CustomerModifyStageDTO'
import CustomerModifyStatusDTO from './definitions/CustomerModifyStatusDTO'
import CustomerCopyParam from './params/CustomerCopyParam'
import CustomerDelParam from './params/CustomerDelParam'
import CustomerCustomerDetailsParam from './params/CustomerCustomerDetailsParam'
import CustomerEventListParam from './params/CustomerEventListParam'
import CustomerEventBO from './definitions/CustomerEventBO'
import CustomerEventPageParam from './params/CustomerEventPageParam'
import Page from './definitions/Page'
import CustomerGetFormInfoParam from './params/CustomerGetFormInfoParam'
import ContentFormLogBO from './definitions/ContentFormLogBO'
import AddCustomerLabelDTO from './definitions/AddCustomerLabelDTO'
import CustomerListDTO from './definitions/CustomerListDTO'
import CustomerModifyFollowerSingleDTO from './definitions/CustomerModifyFollowerSingleDTO'
import AllParamBO from './definitions/AllParamBO'
import CustomerParamAddDTO from './definitions/CustomerParamAddDTO'
import CustomerDelPUTParam from './params/CustomerDelPUTParam'
import ParamAddREQ from './definitions/ParamAddREQ'
import CustomerKeyParam from './params/CustomerKeyParam'
import AllParamBySearchBO from './definitions/AllParamBySearchBO'
import UseNumResp from './definitions/UseNumResp'
import ParamEnumResp from './definitions/ParamEnumResp'
import CustomerSearchColumnListParam from './params/CustomerSearchColumnListParam'
import AllParamLabelBySearchBO from './definitions/AllParamLabelBySearchBO'
import ParamSortREQ from './definitions/ParamSortREQ'
import UpdateParamDTO from './definitions/UpdateParamDTO'
import UpdateCustomerInfoDTO from './definitions/UpdateCustomerInfoDTO'
import UpdateCustomerEventByContentDTO from './definitions/UpdateCustomerEventByContentDTO'
import UpdateCustomerInfoByNickDTO from './definitions/UpdateCustomerInfoByNickDTO'

export class CustomerApi {

  /**
   * ????????????
   *
   * @param { AddCustomerInfoDTO } data
   * @reutrn { Promise<CustomerInfoListBO[]> }
   */
  public static customerAdd(
    data: AddCustomerInfoDTO,
    config?: AxiosRequestConfig): Promise<CustomerInfoListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/add`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { AddCustomerEventByContentDTO } data
   * @reutrn { Promise<void> }
   */
  public static addEvent(
    data: AddCustomerEventByContentDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/addEvent`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * autoChangeByAlloted
   *
   * @reutrn { Promise<void> }
   */
  public static autoChangeByAlloted(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/autoChangeByAlloted`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * autoChangeByDown
   *
   * @reutrn { Promise<void> }
   */
  public static autoChangeByDown(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/autoChangeByDown`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * autoChangeByFollower
   *
   * @reutrn { Promise<void> }
   */
  public static autoChangeByFollower(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/autoChangeByFollower`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ?????????????????????
   *
   * @param { CustomerCommonDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchCancelAssistants(
    data: CustomerCommonDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchCancelAssistants`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerCommonDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchDel(
    data: CustomerCommonDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchDel`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerModifyAssistantsDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyAssistants(
    data: CustomerModifyAssistantsDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyAssistants`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerModifyFollowerDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyFollower(
    data: CustomerModifyFollowerDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyFollower`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ???????????????
   *
   * @param { CustomerModifyLabelDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyLabel(
    data: CustomerModifyLabelDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyLabel`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerModifyMoreFollowerDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyMoreFollower(
    data: CustomerModifyMoreFollowerDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyMoreFollower`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ?????????????????????
   *
   * @param { CustomerModifyStageDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyStage(
    data: CustomerModifyStageDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyStage`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerModifyStatusDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyStatus(
    data: CustomerModifyStatusDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/batchModifyStatus`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????
   *
   * @param { CustomerCopyParam } data
   * @reutrn { Promise<void> }
   */
  public static copy(
    data: CustomerCopyParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/copy`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { CustomerDelParam } data
   * @reutrn { Promise<void> }
   */
  public static del(
    data: CustomerDelParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/del/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { CustomerCustomerDetailsParam } params
   * @reutrn { Promise<CustomerInfoListBO> }
   */
  public static customerDetails(
    params: CustomerCustomerDetailsParam,
    config?: AxiosRequestConfig): Promise<CustomerInfoListBO> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/details/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { CustomerEventListParam } params
   * @reutrn { Promise<CustomerEventBO[]> }
   */
  public static eventList(
    params: CustomerEventListParam,
    config?: AxiosRequestConfig): Promise<CustomerEventBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/event/list`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerEventPageParam } params
   * @reutrn { Promise<Page<CustomerEventBO>> }
   */
  public static eventPage(
    params: CustomerEventPageParam,
    config?: AxiosRequestConfig): Promise<Page<CustomerEventBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/event/page`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerCommonDTO } data
   * @reutrn { Promise<void> }
   */
  public static exportCustomerList(
    data: CustomerCommonDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/export`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @reutrn { Promise<Blob> }
   */
  public static exportTemplate(config?: AxiosRequestConfig): Promise<Blob> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/exportTemplate`,
      method: 'get',
      responseType: 'blob'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerGetFormInfoParam } params
   * @reutrn { Promise<ContentFormLogBO[]> }
   */
  public static getFormInfo(
    params: CustomerGetFormInfoParam,
    config?: AxiosRequestConfig): Promise<ContentFormLogBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/form_info/${params.id}`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { FormData } data
   * @reutrn { Promise<void> }
   */
  public static fileImport(
    data: FormData,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/import`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ?????????????????????
   *
   * @param { AddCustomerLabelDTO } data
   * @reutrn { Promise<void> }
   */
  public static wxAdd(
    data: AddCustomerLabelDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/label/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerListDTO } data
   * @reutrn { Promise<Page<CustomerInfoListBO>> }
   */
  public static customerList(
    data: CustomerListDTO,
    config?: AxiosRequestConfig): Promise<Page<CustomerInfoListBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/list`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { CustomerModifyFollowerSingleDTO } data
   * @reutrn { Promise<void> }
   */
  public static modifyFollower(
    data: CustomerModifyFollowerSingleDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/modifyFollower`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????????????????
   *
   * @reutrn { Promise<AllParamBO[]> }
   */
  public static allParamList(config?: AxiosRequestConfig): Promise<AllParamBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/all/list`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerParamAddDTO } data
   * @reutrn { Promise<void> }
   */
  public static addColumn(
    data: CustomerParamAddDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/columm/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerDelPUTParam } data
   * @reutrn { Promise<void> }
   */
  public static delPUT(
    data: CustomerDelPUTParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/del/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { ParamAddREQ } data
   * @reutrn { Promise<void> }
   */
  public static addGroup(
    data: ParamAddREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/group/add`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ???????????????
   *
   * @reutrn { Promise<void> }
   */
  public static initSex(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/init`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerKeyParam } data
   * @reutrn { Promise<void> }
   */
  public static key(
    data: CustomerKeyParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/key/${data.id}`,
      method: 'put',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????????????????
   *
   * @reutrn { Promise<AllParamBySearchBO[]> }
   */
  public static paramLabelList(config?: AxiosRequestConfig): Promise<AllParamBySearchBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/label/list`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????????????????
   *
   * @reutrn { Promise<AllParamBO[]> }
   */
  public static paramList(config?: AxiosRequestConfig): Promise<AllParamBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/list`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @reutrn { Promise<UseNumResp> }
   */
  public static useNum(config?: AxiosRequestConfig): Promise<UseNumResp> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/num`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @reutrn { Promise<ParamEnumResp[]> }
   */
  public static enumList(config?: AxiosRequestConfig): Promise<ParamEnumResp[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/param/enum`,
      method: 'get',
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { CustomerSearchColumnListParam } params
   * @reutrn { Promise<AllParamLabelBySearchBO> }
   */
  public static searchColumnList(
    params: CustomerSearchColumnListParam,
    config?: AxiosRequestConfig): Promise<AllParamLabelBySearchBO> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/search/column`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ????????????????????????????????????
   *
   * @param { ParamSortREQ } data
   * @reutrn { Promise<void> }
   */
  public static sort(
    data: ParamSortREQ,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/sort`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????????????????
   *
   * @param { UpdateParamDTO } data
   * @reutrn { Promise<void> }
   */
  public static update(
    data: UpdateParamDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/param/update`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { CustomerModifyFollowerDTO } data
   * @reutrn { Promise<void> }
   */
  public static batchModifyFollowerBySelf(
    data: CustomerModifyFollowerDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/self/batchModifyFollower`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * test
   *
   * @reutrn { Promise<void> }
   */
  public static test(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/test`,
      method: 'post',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { UpdateCustomerInfoDTO } data
   * @reutrn { Promise<CustomerInfoListBO[]> }
   */
  public static updateCustomer(
    data: UpdateCustomerInfoDTO,
    config?: AxiosRequestConfig): Promise<CustomerInfoListBO[]> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/update`,
      method: 'post',
      data,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * ??????????????????
   *
   * @param { UpdateCustomerEventByContentDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateEvent(
    data: UpdateCustomerEventByContentDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/updateEvent`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * ????????????
   *
   * @param { UpdateCustomerInfoByNickDTO } data
   * @reutrn { Promise<void> }
   */
  public static updateNick(
    data: UpdateCustomerInfoByNickDTO,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/customer/updateNick`,
      method: 'post',
      data,
      responseType: 'text'
    }, config)) as any
  }

}
