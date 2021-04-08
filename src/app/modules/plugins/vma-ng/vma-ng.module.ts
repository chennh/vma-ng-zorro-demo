import { NgModule } from '@angular/core'
import { VmaComponentsModule, UPLOAD_OPTIONS, UploadOptions, EDITOR_OPTIONS, EditorOptions } from 'vma-ng/vma-ng-zorro'
import { VmaNgAssistModule } from 'vma-ng/vma-ng-assist'
import { ckeditorUploadUrl } from '@/environments'


const uploadOptions: UploadOptions = {
  zoneType: 'qiniu',
  zone: {
    qiniuZone: {
      tokenUrl: '/common/v1.0/oss/qiniu/qiniutoken',
    }
  }
}

const editorOptions: EditorOptions = {
  editorUrl: 'https://resource.v-ma.com/vendor/ckeditor/ckeditor.js',
  config: {
    ckeditorUploadUrl
  }
}

@NgModule({
  declarations: [],
  providers: [{
    provide: UPLOAD_OPTIONS, useValue: uploadOptions
  }, {
    provide: EDITOR_OPTIONS, useValue: editorOptions
  }],
  exports: [
    VmaComponentsModule,
    VmaNgAssistModule
  ]
})
export class VmaNgModule { }
