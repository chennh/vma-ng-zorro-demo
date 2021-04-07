import { PackData } from '@/utils'

export interface IParams extends PackData<any> {
  current?: number
  size?: number
}

export interface IModel extends PackData<any> {
  id: number | string
}

export interface ITable extends PackData<any> {
  list: IModel[]
}

export interface IPagination extends PackData<any> {
  current: number
  total: number
}

export interface IFormModel extends PackData<any> {
  id?: number | string
}
