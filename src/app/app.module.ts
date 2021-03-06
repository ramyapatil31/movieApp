import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListMoviesComponent } from './list.movies/list.movies.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { PayComponent } from './pay/pay.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ListMoviesComponent, BookingComponent, PaymentComponent, PayComponent,  OffersComponent, PaymentDoneComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
