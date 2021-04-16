import { NgModule } from '@angular/core'
import { VmaComponentsModule, UPLOAD_OPTIONS, UploadOptions } from 'vma-ng/vma-ng-zorro'
import { VmaNgAssistModule, EDITOR_OPTIONS, EditorOptions } from 'vma-ng/vma-ng-assist'
import { ckeditorUploadUrl, qiniuTokenUrl } from '@/environments'


const uploadOptions: UploadOptions = {
  zoneType: 'qiniu',
  zone: {
    qiniuZone: {
      tokenUrl: qiniuTokenUrl,
    }
  }
}

const editorOptions: EditorOptions = {
  editorUrl: 'https://resource.v-ma.com/vendor/ckeditor/ckeditor.js',
  config: {
    filebrowserImageUploadUrl: ckeditorUploadUrl
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
