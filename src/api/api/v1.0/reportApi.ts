import axios, { AxiosRequestConfig } from 'axios'
import ReportEnterpriseReportParam from './params/ReportEnterpriseReportParam'
import CustomerEnterpriseReportBO from './definitions/CustomerEnterpriseReportBO'
import ReportMyReportParam from './params/ReportMyReportParam'
import ReportExportStaffReportParam from './params/ReportExportStaffReportParam'
import ReportStaffReportParam from './params/ReportStaffReportParam'
import Page from './definitions/Page'
import CustomerStaffReportBO from './definitions/CustomerStaffReportBO'

export class ReportApi {

  /**
   * 生成报告
   *
   * @reutrn { Promise<void> }
   */
  public static addReport(config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/report/add`,
      method: 'get',
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取企业概览
   *
   * @param { ReportEnterpriseReportParam } params
   * @reutrn { Promise<CustomerEnterpriseReportBO> }
   */
  public static enterpriseReport(
    params: ReportEnterpriseReportParam,
    config?: AxiosRequestConfig): Promise<CustomerEnterpriseReportBO> {
    return axios(Object.assign({
      url: `/api/v1.0/report/enterprise/report`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 我的概览
   *
   * @param { ReportMyReportParam } params
   * @reutrn { Promise<CustomerEnterpriseReportBO> }
   */
  public static myReport(
    params: ReportMyReportParam,
    config?: AxiosRequestConfig): Promise<CustomerEnterpriseReportBO> {
    return axios(Object.assign({
      url: `/api/v1.0/report/my/report`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

  /**
   * 导出员工报表
   *
   * @param { ReportExportStaffReportParam } params
   * @reutrn { Promise<void> }
   */
  public static exportStaffReport(
    params: ReportExportStaffReportParam,
    config?: AxiosRequestConfig): Promise<void> {
    return axios(Object.assign({
      url: `/api/v1.0/report/staff/export`,
      method: 'get',
      params,
      responseType: 'text'
    }, config)) as any
  }

  /**
   * 获取员工报表
   *
   * @param { ReportStaffReportParam } params
   * @reutrn { Promise<Page<CustomerStaffReportBO>> }
   */
  public static staffReport(
    params: ReportStaffReportParam,
    config?: AxiosRequestConfig): Promise<Page<CustomerStaffReportBO>> {
    return axios(Object.assign({
      url: `/api/v1.0/report/staff/report`,
      method: 'get',
      params,
      responseType: 'json'
    }, config)) as any
  }

}
