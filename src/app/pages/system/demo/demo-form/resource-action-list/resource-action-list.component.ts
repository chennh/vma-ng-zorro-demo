import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, forwardRef } from '@angular/core'
import RoleActionBO from '@/api/api/v1.0/definitions/RoleActionBO'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-resource-action-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resource-action-list.component.html',
  styleUrls: ['./resource-action-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ResourceActionListComponent),
      multi: true
    }
  ]
})
export class ResourceActionListComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input()
  resourceActionList: RoleActionBO[] = []

  dataList: ActionItem[][] = []
  value: string[] = []
  allChecked = false
  onChange!: (val: string[]) => void

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const resourceActionListChange = changes.resourceActionList
    const valueChange = changes.value
    if (resourceActionListChange.previousValue !== resourceActionListChange.currentValue ||
      resourceActionListChange.previousValue.length !== resourceActionListChange.currentValue.length ||
      valueChange.previousValue !== valueChange.currentValue ||
      valueChange.previousValue.length !== valueChange.currentValue.length) {
      this.resetDataList()
    }
  }

  writeValue(obj: any): void {
    this.value = obj
    this.resetDataList()
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
  }


  ngOnInit(): void {
  }

  resetDataList() {
    const newDataList: ActionItem[][] = []
    if (this.resourceActionList && this.resourceActionList.length) {
      for (let i = 0, len = Math.ceil(this.resourceActionList.length / 2); i < len; i++) {
        const item1 = this.resourceActionList[i * 2]
        const item2 = this.resourceActionList[i * 2 + 1]
        const arr: ActionItem[] = [{
          allChecked: item1.node && item1.node.every(node => this.value.includes(node.resourceId)),
          data: item1
        }]
        if (item2) {
          arr.push({
            allChecked: item2.node && item2.node.every(node => this.value.includes(node.resourceId)),
            data: item2
          })
        }
        newDataList.push(arr)
      }
    }
    this.dataList = newDataList
    this.resetAllChecked()
  }

  resetAllChecked() {
    this.allChecked = this.value.length === this.resourceActionList.length
  }

  handleNodeCheck(checked: boolean, data: RoleActionBO, item: ActionItem) {
    const index = this.value.indexOf(data.resourceId)
    if (checked) {
      if (index === -1) {
        this.value.push(data.resourceId)
        if (item.data.node.every(node => this.value.includes(node.resourceId))) {
          item.allChecked = true
        }
      }
    } else if (index > -1) {
      this.value.splice(index, 1)
      item.allChecked = false
    }
    this.resetAllChecked()
    this.onChange(this.value)
  }

  handleGroupCheck(checked: boolean, item: ActionItem) {
    item.data.node.forEach(node => {
      const index = this.value.indexOf(node.resourceId)
      if (checked) {
        if (index === -1) {
          this.value.push(node.resourceId)
        }
      } else if (index > -1) {
        this.value.splice(index, 1)
      }
    })
    this.resetAllChecked()
    this.onChange(this.value)
  }

  handleAllCheck(checked: boolean) {
    if (checked) {
      this.value = this.dataList.flat(1).map(data => {
        data.allChecked = true
        return data.data.node.map(item => item.resourceId)
      }).flat(1)
    } else {
      this.dataList.flat(1).forEach(data => data.allChecked = false)
      this.value = []
    }
    this.onChange(this.value)
  }
}

interface ActionItem {
  allChecked: boolean
  data: RoleActionBO
}
