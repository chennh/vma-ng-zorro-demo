import { Injector, Input, Output, EventEmitter, Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { NzMessageService } from 'ng-zorro-antd/message'
import { validateFormGroup } from '@/utils'


@Component({
  template: ''
})
export abstract class FormComponent<T = any> {
  formBuilder: FormBuilder
  message: NzMessageService

  /**
   * 当前实体数据
   *
   * @memberOf FormComponent
   */
  $dataProp!: T | null
  @Input()
  set dataProp(val: T | null) {
    this.$dataProp = val
    if (val) {
      this.entity.patchValue(val)
    }
  }
  get dataProp() {
    return this.$dataProp
  }
  /**
   * 表单提交后事件
   *
   * @memberOf FormComponent
   */
  @Output()
  submitEvt = new EventEmitter<void>()
  /**
   * 表单取消事件
   *
   * @memberOf FormComponent
   */
  @Output()
  cancelEvt = new EventEmitter<void>()


  /**
   * api接口，子类必须重写该属性以提供相应的接口方法
   *
   * @memberOf FormComponent
   */
  abstract api: any
  /**
   * 表单对象，子类必须重写该属性以补全响应式表单校验规则
   *
   * @memberOf FormComponent
   */
  abstract entity: FormGroup

  constructor(
    injector: Injector
  ) {
    this.formBuilder = injector.get(FormBuilder)
    this.message = injector.get(NzMessageService)
  }

  /**
   * 表单校验
   *
   * @returns 校验结果
   *
   * @memberOf FormComponent
   */
  async validate(group = this.entity) {
    return validateFormGroup(group)
  }

  /**
   * 表单校验并且提交
   *
   * @memberOf FormComponent
   */
  async submit() {
    const validateResult = await this.validate()
    if (validateResult) {
      await this.saveOrUpdate()
      this.submitEvt.emit()
    }
  }

  /**
   * 执行新增/编辑
   *
   * @memberOf FormComponent
   */
  async saveOrUpdate() {
    const data = this.entity.value
    if (data.id) {
      await this.getApiUpdate()(data)
      this.message.success('编辑成功')
    } else {
      await this.getApiSave()(data)
      this.message.success('新增成功')
    }
  }

  /**
   * 取消表单
   *
   * @memberOf FormComponent
   */
  cancel() {
    this.cancelEvt.emit()
  }

  /**
   * 获取save接口，子类可重写该方法以提供自定义接口
   *
   * @returns save接口
   *
   * @memberOf FormComponent
   */
  getApiSave() {
    return this.api.save
  }
  /**
   * 获取update接口，子类可重写该方法以提供自定义接口
   *
   * @returns update接口
   *
   * @memberOf FormComponent
   */
  getApiUpdate() {
    return this.api.update
  }
}
