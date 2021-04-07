import { Component, Input, OnInit, ViewChild, EventEmitter, Output, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree'
import MenuListBO from '@/api/api/v1.0/definitions/MenuListBO'

@Component({
  selector: 'app-resource-menu-list-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resource-menu-list-tree.component.html',
  styleUrls: ['./resource-menu-list-tree.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ResourceMenuListTreeComponent),
      multi: true
    }
  ]
})
export class ResourceMenuListTreeComponent implements OnInit, ControlValueAccessor {

  @Input()
  set resourceMenuList(data: MenuListBO[]) {
    this.treeData = this.loopMenuListToTreeData(data)
  }

  onChange!: (val: string[]) => void

  treeData: NzTreeNodeOptions[] = []
  checkedKeys: string[] = []
  isDisabled = false

  @ViewChild('nzTree')
  nzTree!: NzTreeComponent

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }


  writeValue(obj: any): void {
    this.checkedKeys = obj
    this.changeDetectorRef.markForCheck()
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
    this.changeDetectorRef.markForCheck()
  }

  ngOnInit(): void {
  }

  loopMenuListToTreeData(list: MenuListBO[]): NzTreeNodeOptions[] {
    return list.map(item => {
      return {
        key: item.resourceId,
        title: item.title,
        isLeaf: !item.node,
        disableCheckbox: this.isDisabled,
        children: item.node ? this.loopMenuListToTreeData(item.node) : []
      }
    })
  }

  loopCheckedNodesToKeys(nodes: NzTreeNode[], keys: string[] = []): string[] {
    nodes.forEach(item => {
      keys.push(item.key)
      if (item && item.children) {
        this.loopCheckedNodesToKeys(item.children, keys)
      }
    })
    return keys
  }

  onCheckBoxChange(data: any) {
    const checkedKeys = this.loopCheckedNodesToKeys(this.nzTree.getCheckedNodeList())
    this.onChange(checkedKeys)
  }
}
