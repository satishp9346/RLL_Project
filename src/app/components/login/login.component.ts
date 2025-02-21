import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login_service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  errorMessage: string = '';
  isLoading = false;

  str:string[]=['Hello','Hai']

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private loginService:LoginServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      setTimeout(() => {
        console.log(this.loginForm.value)
        if (this.loginForm.valid) {
          this.loginService.checkUser(this.loginForm.value.email,this.loginForm.value.password).subscribe((userReq)=>{
            if(userReq!=null){
              console.log("user request==>"+JSON.stringify(userReq));
              sessionStorage.setItem("profile",JSON.stringify(userReq));
              switch(userReq.user.role){
                case 'ADMIN':
                  this.router.navigate(['/dashboard/admin']);
                  break;
                case 'SELLER':
                  this.router.navigate(['/dashboard/seller']);
                  break
                case 'PROPERTY_MANAGER':
                  this.router.navigate(['/dashboard/property_manager']);
                  break;
                case 'BUYER':
                  this.router.navigate(['/dashboard/buyer']);
                  break;
                default:
                  this.errorMessage="Invalid Role...";
                  break;
              }
            }
          },(err:HttpErrorResponse)=>{
            if(err.status===404){
              this.errorMessage=err.error;
            }
          });
        }
        else{
          this.errorMessage="Fields should not empty"
        }

        this.isLoading = false;
      }, 2000);
    }
  }
}
