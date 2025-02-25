import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
 constructor(private router:Router){
    
  }

  ngOnInit() {
    
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
      this.currentHeroImage = this.heroImages[this.currentImageIndex];
    }, 4000);
  }

  viewPropertList():void{
    // console.log(redirect+"  "+selectedProperty);
    // localStorage.setItem("selectedType",selectedProperty);
    // this.propertyService.setSelectedType(selectedProperty);
    // this.router.navigate([`${redirect}`]);
    this.router.navigate(['/dashboard/admin/common_property_list']);
  }

  
  heroImages: string[] = [
    '../assets/360_F_260392508_GwfkN35u5UgBXYrHbTgmSKW4V67GAPKG.webp',
     'assets/pexels-pixabay-259588.jpg',
     'assets/pexels-pixabay-276554.jpg',
     'assets/360_F_446544889_jUP4HMhMTXFXdGMAiyYW20RIZZMMp2Ho.webp',
     'assets/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.webp',
     'assets/360_F_946360076_BgRBya1HtSnBWOgHUYL7rsoGUkx150ub.webp'
   ];
   currentImageIndex: number = 0;
   currentHeroImage: string = this.heroImages[0];
 
  
   galleryImages = [
     '../assets/360_F_260392508_GwfkN35u5UgBXYrHbTgmSKW4V67GAPKG.webp',
     'assets/360_F_283364293_GcZ83vpz6nrJEyaEvSvq4i0GCl4cs95y.webp',
     'assets/360_F_313695088_HZieAKH5iGgWFq21CmLnXUhT4hI8pd9x.webp',
     'assets/360_F_446544889_jUP4HMhMTXFXdGMAiyYW20RIZZMMp2Ho.webp',
     'assets/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.webp',
     'assets/360_F_946360076_BgRBya1HtSnBWOgHUYL7rsoGUkx150ub.webp'
   ];
 
   properties2 = [
     {
       title:'Flats in Apartments',
       text:'Find modern apartments with great amenities.',
       type:'apartment',
       btnText:'View Flats in Apartments',
       image: 'https://images.thesqua.re/property/20240716-13400340S_2'
     },
     {
      title:'Plots',
      text:'Explore open land plots for construction.',
      type:'plots',
      btnText:'View Plots',
      image: 'https://media.tatarealty.in/posts/December2022/blog_5_2.jpg'
    },
    {
      title:'Individual Houses / Villas',
      text:'Luxury villas and independent houses for sale.',
      type:'villa',
      btnText:'View Villas / Individual Houses',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFZJTExBfGVufDB8fDB8fHww'
    }
    ]


}
