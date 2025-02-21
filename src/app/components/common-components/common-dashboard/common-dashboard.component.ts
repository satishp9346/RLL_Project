import { Component } from '@angular/core';

@Component({
  selector: 'app-common-dashboard',
  templateUrl: './common-dashboard.component.html',
  styleUrls: ['./common-dashboard.component.css']
})
export class CommonDashboardComponent {

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
 
   ngOnInit() {
     setInterval(() => {
       this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
       this.currentHeroImage = this.heroImages[this.currentImageIndex];
     }, 4000);
   }
 
   galleryImages = [
     '../assets/360_F_260392508_GwfkN35u5UgBXYrHbTgmSKW4V67GAPKG.webp',
     'assets/360_F_283364293_GcZ83vpz6nrJEyaEvSvq4i0GCl4cs95y.webp',
     'assets/360_F_313695088_HZieAKH5iGgWFq21CmLnXUhT4hI8pd9x.webp',
     'assets/360_F_446544889_jUP4HMhMTXFXdGMAiyYW20RIZZMMp2Ho.webp',
     'assets/360_F_585099377_gTDI0eIWTVNEMFGyjNbtBYOhRD98Uq4W.webp',
     'assets/360_F_946360076_BgRBya1HtSnBWOgHUYL7rsoGUkx150ub.webp'
   ];
 
   properties = [
     {
       type: 'Sale',
       price: '$4,300,000',
       location: '4815 Hollywood Hills, Los Angeles',
       bedrooms: 4,
       bathrooms: 2,
       image: 'assets/360_F_946360076_BgRBya1HtSnBWOgHUYL7rsoGUkx150ub.webp'
     },
     {
       type: 'Sale',
       price: '$3,500,000',
       location: '623 Van Nuys, Los Angeles',
       bedrooms: 5,
       bathrooms: 2,
       image: 'assets/360_F_1214656721_AeLi3pW2cYdlmuPO1Awi2W88PqVaL1Z8.webp'
     },
     {
       type: 'Rent',
       price: '$3,500',
       location: '132 Downtown, Los Angeles',
       bedrooms: 3,
       bathrooms: 2,
       image: 'assets/pexels-fotoaibe-1571459.jpg'
     }
   ];
   properties2 = [
     {
       type: 'Sale',
       price: '$4,300,000',
       location: '4815 Hollywood Hills, Los Angeles',
       bedrooms: 4,
       bathrooms: 2,
       image: 'assets/pexels-heyho-6585604.jpg'
     },
     {
       type: 'Sale',
       price: '$3,500,000',
       location: '623 Van Nuys, Los Angeles',
       bedrooms: 5,
       bathrooms: 2,
       image: 'assets/pexels-pixabay-259588.jpg'
     },
     {
       type: 'Rent',
       price: '$3,500',
       location: '132 Downtown, Los Angeles',
       bedrooms: 3,
       bathrooms: 2,
       image: 'assets/pexels-pu-ca-adryan-163345030-28729467.jpg'
     }
    ]

}
