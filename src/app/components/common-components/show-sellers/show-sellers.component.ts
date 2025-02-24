import { Component } from '@angular/core';
import { PropertyManagerServiceService } from 'src/app/services/property_manager/property-manager-service.service';

@Component({
  selector: 'app-show-sellers',
  templateUrl: './show-sellers.component.html',
  styleUrls: ['./show-sellers.component.css']
})
export class ShowSellersComponent {
 sellersList: any[] = [];
  constructor(private propertyManagerService: PropertyManagerServiceService) { }
  seller1: any;
  flag: boolean = false;
  ngOnInit() {
    this.propertyManagerService.getAllSeller().subscribe((data) => {
      this.sellersList = data.filter(item => item.user !== null);
      console.log("seller list==>", this.sellersList);
    });
  }
  selectPropertyManager(propManager: any): void {
    // this.propertyManagerSelected.emit(propManager);
  }
  viewMore(seller: any) {
    this.seller1 = seller;
    this.flag = !this.flag;
  }
  close() {
    this.flag = !this.flag;
  }
}
