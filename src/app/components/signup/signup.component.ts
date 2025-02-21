import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login_service/login-service.service';
import { Address } from 'src/app/utils/Address';
import { User } from 'src/app/utils/User';
import { userCommonDetails } from 'src/app/utils/UserCommonDetails';
import { UserResponse } from 'src/app/utils/UserResponse';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  loading = false;
  hidePassword = true;
  hideReEnterPassword = true;
  errorMessage: string = "";
  // userResponse: UserResponse = null;
  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router, private httpClient: HttpClient) { }
  ngOnInit(): void { 
    this.signupForm = this.fb.group({ 
      userType: ['buyer', Validators.required], 
      firstName: ['', [Validators.required, Validators.minLength(2)]], 
      lastName: ['', [Validators.required, Validators.minLength(2)]], 
      email: ['', [Validators.required, Validators.email]], 
      gender: ['', Validators.required],
      age:['',[Validators.required]], 
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      reEnterPassword: ['', [Validators.required]],
      doorNo: ['', Validators.required], 
      street: ['', Validators.required], 
      city: ['', Validators.required], 
      district: ['', Validators.required], 
      state: ['', Validators.required], 
      country: ['', Validators.required],
      pinCode: ['', Validators.required] 
    }); 
  }

  get f() {
    return this.signupForm.controls;
  }

  getErrorMessage(control: string): string {
    const formControl = this.f[control];
    if (!formControl) {
      return '';
    }
    if (formControl.hasError('required')) {
      return `${control} is required`;
    } else if (formControl.hasError('email')) {
      return `Invalid email address`;
    } else if (formControl.hasError('minlength')) {
      const minLength = formControl.errors['minlength'].requiredLength;
      return `${control} must be at least ${minLength} characters long`;
    } else if (formControl.hasError('pattern')) {
      return `Invalid ${control}`;
    } else if (control === 'reEnterPassword' && this.signupForm.get('password')?.value !== this.signupForm.get('reEnterPassword')?.value) {
      console.log("sdhsgjhhj");
      return `Passwords do not match`;
    }
    return '';
  }

  postData():void{
    let userResponse={
      "user": {
        "email": "chandu@gmail.com",
        "password": "chandu@123",
        "role": "BUYER"
      },
      "userCommonDetails": {
        "firstName": "sai",
        "lastName": "teja",
        "gender": "male",
        "age": 22,
        "mobileNo": "9848032191",
        "address": {
          "doorNum": "100-80",
          "street": "ramalayam",
          "city": "ongole",
          "district": "prakasam",
          "pinCode": "523001",
          "state": "AP",
          "country": "India"
        }
      }
    }
      console.log(userResponse);
    this.loginService.addUser(userResponse).subscribe((user) => {
      if (user != null)
        this.errorMessage = "";
    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        this.errorMessage = err.error;
      }
    });
  
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    setTimeout(() => {
      console.log("formDtaa==>"+JSON.stringify(this.signupForm.value));
      if (this.signupForm.valid) {
        const temp = this.signupForm.value;
         let userResponse=new UserResponse(new User(temp.email,temp.password,temp.userType.toUpperCase()),
          new userCommonDetails(temp.firstName,temp.lastName,temp.gender,temp.age,temp.phoneNumber,
            new Address(temp.doorNo,temp.street,temp.city,temp.district,temp.state,temp.pinCode,temp.country)
          ));
          console.log("===>"+JSON.stringify(userResponse));
        this.loginService.addUser(userResponse).subscribe((user) => {
          if (user != null){
            this.errorMessage = "";
            alert('Form submitted successfully!');
            this.router.navigate([''])
          }
        }, (err: HttpErrorResponse) => {
          if (err.status === 404) {
            this.errorMessage = err.error;
          }
        });
      }
      else {
        this.errorMessage = "Fields should not empty"
      }
      
      

      this.loading = false;
    }, 2000);
    // const formData = this.signupForm.value;
    // console.log(formData);

    // // Mock API call
    // setTimeout(() => {
    //   this.loading = false;
    
    // }, 2000);
  }

  getLocationOptions(location: string): string[] {
    switch (location) {
      case 'district':
        return ['Amarvati', 'Dharwad', 'Hyderabad', 'Chennai', 'Pune', 'Shimala'];
      case 'state':
        return ['Andhra Pradesh', 'Karnataka', 'Telangana', 'Tamil Nadu', 'Maharashtra', 'Himachal Pradesh'];
      case 'country':
        return ['India'];
      default:
        return [];
    }
  }
}
