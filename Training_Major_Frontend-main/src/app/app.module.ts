import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModule } from "./user/user.module";
import { ManagerModule } from "./manager/manager.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TimeAgoPipe } from "time-ago-pipe";
import { AdminModule } from "./admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthinterceptorService } from "./shared/authinterceptor.service";
import { GlobalErrorHandler } from './shared/global-error-handler';
import { HttpErrorInterceptor } from './shared/http-error-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule,
    ManagerModule,
    FormsModule,
    AdminModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
