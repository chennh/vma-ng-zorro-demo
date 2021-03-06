import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PluginsModule } from './plugins/plugins.module'
import { ServicesModule } from './services/services.module'
import { LibsModule } from './components/libs/libs.module'



@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PluginsModule,
    ServicesModule,
    LibsModule,
  ]
})
export class AllModule { }
