import { VmaPlugin } from 'vma-ng/vma-ng-assist'
import { NgModule } from '@angular/core'
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config'
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { zh_CN } from 'ng-zorro-antd/i18n'


import { NzButtonModule } from 'ng-zorro-antd/button'
import { NZ_ICONS, NzIconModule, NzIconService } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzStepsModule } from 'ng-zorro-antd/steps'
import { NzCascaderModule } from 'ng-zorro-antd/cascader'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzMentionModule } from 'ng-zorro-antd/mention'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzRateModule } from 'ng-zorro-antd/rate'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSliderModule } from 'ng-zorro-antd/slider'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker'
import { NzTransferModule } from 'ng-zorro-antd/transfer'
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select'
import { NzUploadModule } from 'ng-zorro-antd/upload'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzCalendarModule } from 'ng-zorro-antd/calendar'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzCommentModule } from 'ng-zorro-antd/comment'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzImageModule } from 'ng-zorro-antd/image'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTreeModule } from 'ng-zorro-antd/tree'
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzNotificationModule } from 'ng-zorro-antd/notification'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzProgressModule } from 'ng-zorro-antd/progress'
import { NzResultModule } from 'ng-zorro-antd/result'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzAnchorModule } from 'ng-zorro-antd/anchor'
import { NzBackTopModule } from 'ng-zorro-antd/back-top'


const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline]
const ngZorroConfig: NzConfig = {}

@NgModule({
  imports: [],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzDropDownModule,
    NzMenuModule,
    NzPaginationModule,
    NzStepsModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSliderModule,
    NzSwitchModule,
    NzTimePickerModule,
    NzTransferModule,
    NzTreeSelectModule,
    NzUploadModule,
    NzAvatarModule,
    NzBadgeModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCollapseModule,
    NzCommentModule,
    NzEmptyModule,
    NzImageModule,
    NzListModule,
    NzPopoverModule,
    NzStatisticModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTreeModule,
    NzTreeViewModule,
    NzAlertModule,
    NzDrawerModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPopconfirmModule,
    NzProgressModule,
    NzResultModule,
    NzSkeletonModule,
    NzSpinModule,
    NzAnchorModule,
    NzBackTopModule,
  ],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: zh_CN },
  ]
})
export class NzModule {
  constructor(private iconService: NzIconService) {
    VmaPlugin.init('NzModule', () => {
      this.iconService.fetchFromIconfont({
        scriptUrl: '//at.alicdn.com/t/font_2174640_pf6jf7ob20s.js'
      })
    })
  }
}
