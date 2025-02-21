import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { BuyerHomeComponent } from './components/buyer-home/buyer-home.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { PlotsComponent } from './components/plots/plots.component';
import { IndividualHousesComponent } from './components/individual-houses/individual-houses.component';
import { SellerComponent } from './components/seller/seller.component';
import { PropertyManagerComponent } from './components/property-manager/property-manager.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { ApartmentFormComponent } from './components/apartment-form/apartment-form.component';
import { PlotFormComponent } from './components/plot-form/plot-form.component';
import { VillasFormComponent } from './components/villas-form/villas-form.component';
import { CommonDashboardComponent } from './components/common-components/common-dashboard/common-dashboard.component';

const routes: Routes = [
  {path:'',component:CommonDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', 
    component: DashboardComponent ,
    children:[
      {
        path:'admin',
        component:AdminComponent
      },
      {
        path:'buyer',
        component:BuyerComponent,
        children:[
          {path:'',component:BuyerHomeComponent},
          {path:'apartments',component:ApartmentsComponent},
          {path:'plots',component:PlotsComponent},
          {path:'individual_houses',component:IndividualHousesComponent},
          {path:'property_card',component:PropertyCardComponent}
        ]
      },
      {
        path:'seller',
        component:SellerComponent,
        children:[
          {path:'apartment_form',component:ApartmentFormComponent},
          {path:'plot_form',component:PlotFormComponent},
          {path:'villas_form',component:VillasFormComponent}
        ]
      },
      {
        path:'property_manager',
        component:PropertyManagerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
