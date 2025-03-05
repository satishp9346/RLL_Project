import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent {


  constructor(private router:Router,private propertyService:PropertyService){
    
  }

  ngOnInit() {
    
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
      this.currentHeroImage = this.heroImages[this.currentImageIndex];
    }, 4000);
  }

  viewPropertList(selectedProperty:string):void{
    // console.log(redirect+"  "+selectedProperty);
    localStorage.setItem("selectedType",selectedProperty);
    // this.propertyService.setSelectedType(selectedProperty);
    // this.router.navigate([`${redirect}`]);
    this.router.navigate(['/dashboard/buyer/apartments']);
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
      image: 'https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E='
    }
    ]



}
