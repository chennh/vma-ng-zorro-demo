import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '@/environments'
import { AllModule } from './modules/all.module'

registerLocaleData(zh)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AllModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
