import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyerComponent } from './components/buyer-components/buyer/buyer.component';
import { BuyerHomeComponent } from './components/buyer-components/buyer-home/buyer-home.component';
import { ApartmentsComponent } from './components/buyer-components/apartments/apartments.component';
import { PlotsComponent } from './components/plots/plots.component';
import { IndividualHousesComponent } from './components/individual-houses/individual-houses.component';
import { SellerComponent } from './components/seller-components/seller/seller.component';
import { PropertyManagerComponent } from './components/property-manager-components/property-manager/property-manager.component';
import { AdminComponent } from './components/admin-components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PropertyCardComponent } from './components/buyer-components/property-card/property-card.component';
import { ApartmentFormComponent } from './components/apartment-form/apartment-form.component';
import { PlotFormComponent } from './components/seller-components/plot-form/plot-form.component';
import { VillasFormComponent } from './components/seller-components/villas-form/villas-form.component';
import { CommonDashboardComponent } from './components/common-components/common-dashboard/common-dashboard.component';
import { ListPropertyMangersComponent } from './components/common-components/list-property-mangers/list-property-mangers.component';
import { ListPropertyMangerRequestsComponent } from './components/property-manager-components/list-property-manger-requests/list-property-manger-requests.component';
import { PropertyCardManagerComponent } from './components/property-manager-components/property-card-manager/property-card-manager.component';
import { AdminRequestPropertyCardComponent } from './components/admin-components/admin-request-property-card/admin-request-property-card.component';
import { ListAdminRequestsComponent } from './components/admin-components/list-admin-requests/list-admin-requests.component';
import { SellerRequestPropertyCardComponent } from './components/seller-components/seller-request-property-card/seller-request-property-card.component';
import { SellerListRequestsComponent } from './components/seller-components/seller-list-requests/seller-list-requests.component';
import { ShowBuyersComponent } from './components/common-components/show-buyers/show-buyers.component';
import { ShowPropertyManagersComponent } from './components/common-components/show-property-managers/show-property-managers.component';
import { ShowSellersComponent } from './components/common-components/show-sellers/show-sellers.component';
import { BuyerFavouratePropertiesComponent } from './components/buyer-components/buyer-favourate-properties/buyer-favourate-properties.component';
import { BuyerViewedPropertiesComponent } from './components/buyer-components/buyer-viewed-properties/buyer-viewed-properties.component';
import { CommonPropertyListComponent } from './components/common-components/common-property-list/common-property-list.component';
import { CommonPropertyCardComponent } from './components/common-components/common-property-card/common-property-card.component';
import { AdminDashboardComponent } from './components/admin-components/admin-dashboard/admin-dashboard.component';
import { BuyerSoldComponent } from './components/buyer-components/buyer-sold/buyer-sold.component';
import { BuyerBoughtViewCardComponent } from './components/buyer-components/buyer-bought-view-card/buyer-bought-view-card.component';

const routes: Routes = [
  {path:'',component:CommonDashboardComponent},
  {path:'common_property_list',component:CommonPropertyListComponent},
  {path:'common_property_card',component:CommonPropertyCardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path:'list_property_managers',component:ListPropertyMangersComponent},
  {path:'list_admin_requests',component:ListAdminRequestsComponent},
  
  { path: 'dashboard', 
    component: DashboardComponent ,
    children:[
      {path:'common_property_card',component:CommonPropertyCardComponent},
      {
        path:'admin',
        component:AdminComponent,
        children:[
          {path:'',component:AdminDashboardComponent},
          {path:'list_admin_requests',component:ListAdminRequestsComponent},
          {path:'admin_request_property_card',component:AdminRequestPropertyCardComponent},
          {path:'list_buyers',component:ShowBuyersComponent},
          {path:'list_property_managers',component:ShowPropertyManagersComponent},
          {path:'list_sellers',component:ShowSellersComponent},
          {path:'common_property_list',component:CommonPropertyListComponent},
        
        ]
      },
      {
        path:'buyer',
        component:BuyerComponent,
        children:[
          {path:'',component:BuyerHomeComponent},
          {path:'apartments',component:ApartmentsComponent},
          {path:'plots',component:PlotsComponent},
          {path:'individual_houses',component:IndividualHousesComponent},
          {path:'property_card',component:PropertyCardComponent},
          {path:'favourite',component:BuyerFavouratePropertiesComponent},
          {path:'viewed',component:BuyerViewedPropertiesComponent},
          {path:'list_property_managers',component:ShowPropertyManagersComponent},
          {path:'buyer_bought',component:BuyerSoldComponent},
          {path:'buyer_bought_view',component:BuyerBoughtViewCardComponent}
        ]
      },
      {
        path:'seller',
        component:SellerComponent,
        children:[
          {path:'',component:AdminDashboardComponent},
          {path:'apartment_form',component:ApartmentFormComponent},
          {path:'plot_form',component:PlotFormComponent},
          {path:'villas_form',component:VillasFormComponent},
          {path:'list_property_managers',component:ShowPropertyManagersComponent},
          {path:'seller_list_requests',component:SellerListRequestsComponent},
          {path:'seller_request_property_card',component:SellerRequestPropertyCardComponent},
          {path:'common_property_list',component:CommonPropertyListComponent}
        ]
      },
      {
        path:'property_manager',
        component:PropertyManagerComponent,
        children:[
          {path:'',component:AdminDashboardComponent},
          {path:'list_property_manager_request',component:ListPropertyMangerRequestsComponent},
          {path:'property_card_manager',component:PropertyCardManagerComponent},
          {path:'list_buyers',component:ShowBuyersComponent},
          {path:'list_property_managers',component:ShowPropertyManagersComponent},
          {path:'list_sellers',component:ShowSellersComponent},
          {path:'common_property_list',component:CommonPropertyListComponent},
  
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
