import { Component } from '@angular/core';
import { PropertyManagerServiceService } from 'src/app/services/property_manager/property-manager-service.service';

@Component({
  selector: 'app-show-buyers',
  templateUrl: './show-buyers.component.html',
  styleUrls: ['./show-buyers.component.css']
})
export class ShowBuyersComponent {
  buyersList: any[] = [];
  constructor(private propertyManagerService: PropertyManagerServiceService) { }
  buyer1: any;
  flag: boolean = false;
  ngOnInit() {
    this.propertyManagerService.getAllBuyers().subscribe((data) => {
      this.buyersList = data.filter(item => item.user !== null);
      console.log("buyer list==>", this.buyersList);
    });
  }
  selectPropertyManager(propManager: any): void {
    // this.propertyManagerSelected.emit(propManager);
  }
  viewMore(buyer: any) {
    this.buyer1 = buyer;
    this.flag = !this.flag;
  }
  close() {
    this.flag = !this.flag;
  }
}
