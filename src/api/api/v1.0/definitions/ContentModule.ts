import CarouselBO from './CarouselBO'
import ContentBO from './ContentBO'


export default class ContentModule {

  /**
   * 轮播图
   */
    public carousel?: CarouselBO[]

  /**
   * 内容
   */
    public contentList?: ContentBO[]

  /**
   * 图标
   */
    public icon?: string

  /**
   * 位置
   */
    public location?: number

  /**
   * 标题栏-名称
   */
    public name?: string

  /**
   * 价格
   */
    public price?: string

  /**
   * 富文本
   */
    public richText?: string

  /**
   * 分享样式图
   */
    public shareImg?: string

  /**
   * 摘要
   */
    public shareTitle?: string

  /**
   * 控件类型 0页面信息 1文章 2文件 3表单 4商品 21轮播图 22标题栏 23分隔符 24富文本
   */
    public type!: number

}
