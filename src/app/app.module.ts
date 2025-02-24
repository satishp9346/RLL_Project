import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'
import { BuyerComponent } from './components/buyer/buyer.component';
// import { ApartmentsComponent } from './components/apartments/apartments.component';
import { PlotsComponent } from './components/plots/plots.component';
import { IndividualHousesComponent } from './components/individual-houses/individual-houses.component';
import { BuyerHomeComponent } from './components/buyer-home/buyer-home.component';
import { SellerComponent } from './components/seller/seller.component';
import { AdminComponent } from './components/admin/admin.component';
import { PropertyManagerComponent } from './components/property-manager/property-manager.component';
import { SignupComponent } from './components/signup/signup.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { ChatBoxComponent } from './components/common-components/chat-box/chat-box.component';
import { ImagePopupComponent } from './components/common-components/image-popup/image-popup.component';
import { ProfileComponent } from './components/common-components/profile/profile.component';
import { ApartmentFormComponent } from './components/apartment-form/apartment-form.component';
import { PlotFormComponent } from './components/plot-form/plot-form.component';
import { VillasFormComponent } from './components/villas-form/villas-form.component';
import { CommonDashboardComponent } from './components/common-components/common-dashboard/common-dashboard.component';
import { PropertyService } from './services/property_service/property.service';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ListPropertyMangersComponent } from './components/common-components/list-property-mangers/list-property-mangers.component';
import { ListPropertyMangerRequestsComponent } from './components/list-property-manger-requests/list-property-manger-requests.component';
import { PropertyCardManagerComponent } from './components/property-card-manager/property-card-manager.component';
import { AdminRequestPropertyCardComponent } from './components/admin-request-property-card/admin-request-property-card.component';
import { ListAdminRequestsComponent } from './components/list-admin-requests/list-admin-requests.component';
import { DefaultPageComponent } from './components/common-components/default-page/default-page.component';
import { SellerListRequestsComponent } from './components/seller-list-requests/seller-list-requests.component';
import { SellerRequestPropertyCardComponent } from './components/seller-request-property-card/seller-request-property-card.component';
import { ShowBuyersComponent } from './components/common-components/show-buyers/show-buyers.component';
import { ShowSellersComponent } from './components/common-components/show-sellers/show-sellers.component';
import { ShowPropertyManagersComponent } from './components/common-components/show-property-managers/show-property-managers.component';
import { BuyerViewedPropertiesComponent } from './components/buyer-viewed-properties/buyer-viewed-properties.component';
import { BuyerFavouratePropertiesComponent } from './components/buyer-favourate-properties/buyer-favourate-properties.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BuyerComponent,
    ApartmentsComponent,
    PlotsComponent,
    IndividualHousesComponent,
    BuyerHomeComponent,
    SellerComponent,
    AdminComponent,
    PropertyManagerComponent,
    PropertyCardComponent,
    ChatBoxComponent,
    ImagePopupComponent,
    ProfileComponent,
    ApartmentFormComponent,
    PlotFormComponent,
    VillasFormComponent,
    CommonDashboardComponent,
    ListPropertyMangersComponent,
    ListPropertyMangerRequestsComponent,
    PropertyCardManagerComponent,
    AdminRequestPropertyCardComponent,
    ListAdminRequestsComponent,
    DefaultPageComponent,
    SellerListRequestsComponent,
    SellerRequestPropertyCardComponent,
    ShowBuyersComponent,
    ShowSellersComponent,
    ShowPropertyManagersComponent,
    BuyerViewedPropertiesComponent,
    BuyerFavouratePropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
