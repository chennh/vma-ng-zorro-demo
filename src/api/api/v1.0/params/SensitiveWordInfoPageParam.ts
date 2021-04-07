

export default class SensitiveWordInfoPageParam {

  /**
   * 页码
   */
    public current!: number

  /**
   * 分页大小
   */
    public size!: number

  /**
   * 分组ID
   */
    public groupId?: number

  /**
   * 敏感词
   */
    public words?: string

}
