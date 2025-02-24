import { Component, EventEmitter, Output } from '@angular/core';
import { PropertyManagerServiceService } from 'src/app/services/property_manager/property-manager-service.service';

@Component({
  selector: 'app-list-property-mangers',
  templateUrl: './list-property-mangers.component.html',
  styleUrls: ['./list-property-mangers.component.css']
})
export class ListPropertyMangersComponent {
  @Output() propertyManagerSelected = new EventEmitter<any>();
  @Output() closePopup = new EventEmitter<void>();
   propManagers:any[]=[
      // {
      //   "user": {
      //     "email": "raju@gmail.com",
      //     "password": "raju@123",
      //     "role": "PROPERTYMANAGER"
      //   },
      //   "userCommonDetails": {
      //     "firstName": "Raj",
      //     "lastName": "Kumar",
      //     "gender": "Male",
      //     "age": 23,
      //     "mobileNo": "9898989800",
      //     "address": {
      //       "doorNum": "6-100",
      //       "street": "ramadhevi street",
      //       "city": "Guntur",
      //       "district": "Guntur",
      //       "pinCode": "522603",
      //       "state": "AP",
      //       "country": "India"
      //     }
      //   }
      // }
  ]

  constructor(private propertyManagerService:PropertyManagerServiceService){}

  ngOnInit(){
    this.propertyManagerService.getAllPropertyMagers().subscribe((data)=>{
      if(data)
        this.propManagers=data;
      console.log(this.propManagers);
    })
  }
  selectPropertyManager(propManager: any): void {
    this.propertyManagerSelected.emit(propManager);
  }
  close(): void {
    this.closePopup.emit();
  }


}
