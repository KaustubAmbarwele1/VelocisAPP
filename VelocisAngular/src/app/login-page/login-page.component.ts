import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Logindetails } from './login.model';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  required : any;
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private  authService :AuthService,
      private toastr: ToastrService
      // private accountService: AccountService,
      // private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;


      const storeUsername = 'nilesh@gmail.com'
      const storePassword = 'pass@123'

      // if(storeUsername == this.form.value.username  && storePassword == this.form.value.password)
      // {
      //   this.router.navigate(['/dashboard']);
        
      // }
      // else
      // {
      //   return
      // }
      // reset alerts on submit
     // this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;


      this.authService.login(this.form.value.username,this.form.value.password).pipe()
    .subscribe((data) => {
      if (data === true) {
        this.toastr.success("Login Successfully")
        this.router.navigate(['/dashboard']);
        this.toastr.success("Login Successfully")
        this.loading = false;
      }
      else {

        this.toastr.error('Please enter vaild user and password')
        this.loading = false;
        return
      }
    });
 
  }
}
