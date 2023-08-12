import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from './material.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserDashboardComponent } from './main-layout/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './main-layout/admin-dashboard/admin-dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './main-layout/user-dashboard/category-list/category-list.component';
import { ProductCardComponent } from './main-layout/user-dashboard/product-card/product-card.component';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AddOrEditProductComponent } from './main-layout/admin-dashboard/add-or-edit-product/add-or-edit-product.component';
import { DeleteConfirmationComponent } from './main-layout/admin-dashboard/delete-confirmation/delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    CategoryListComponent,
    ProductCardComponent,
    NavbarComponent,
    TruncatePipe,
    AddOrEditProductComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
