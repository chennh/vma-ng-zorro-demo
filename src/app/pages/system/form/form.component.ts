import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload'
import { VmaUploaderService } from 'vma-ng/vma-ng-zorro'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stringValue = ''

  arrayValue: string[] = []

  editorText = ''
  editorReadOnly = false

  constructor(
    private uploaderService: VmaUploaderService
  ) { }

  ngOnInit(): void {
  }

  beforeUpload = (file: NzUploadFile) => {
    this.uploaderService.upload(file as any).then(url => {
      console.log(url)
    })
    return false
  }

}
