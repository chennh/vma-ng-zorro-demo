
declare module 'vma-assist/dist/static/js/utils' {
  export * from 'vma-assist/typings/utils'
}

declare module 'vma-assist/dist/static/js/tools/constant' {
  export * from 'vma-assist/typings/tools/constant'
}

declare module 'vma-assist/dist/static/js/tools/storage' {
  export * from 'vma-assist/typings/tools/storage'
}

declare module 'vma-assist/dist/static/js/tools/axios' {
  import { AxiosOptions } from 'vma-assist/typings/tools/axios'
  const plugin: (options?: AxiosOptions) => void
  export default plugin
  export * from 'vma-assist/typings/tools/axios'
}

