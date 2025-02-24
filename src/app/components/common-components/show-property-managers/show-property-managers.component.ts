import { Component } from '@angular/core';
import { PropertyManagerServiceService } from 'src/app/services/property_manager/property-manager-service.service';

@Component({
  selector: 'app-show-property-managers',
  templateUrl: './show-property-managers.component.html',
  styleUrls: ['./show-property-managers.component.css']
})
export class ShowPropertyManagersComponent {
  propertyManagerList: any[] = [];
  constructor(private propertyManagerService: PropertyManagerServiceService) { }
  propertyManager1: any;
  flag: boolean = false;
  ngOnInit() {
    this.propertyManagerService.getAllPropertyMagers().subscribe((data) => {
      this.propertyManagerList = data.filter(item => item.user !== null);
      console.log("buyer list==>", this.propertyManagerList);
    });
  }
  selectPropertyManager(propManager: any): void {
    // this.propertyManagerSelected.emit(propManager);
  }
  viewMore(propManager: any) {
    this.propertyManager1 = propManager;
    this.flag = !this.flag;
  }
  close() {
    this.flag = !this.flag;
  }
}
