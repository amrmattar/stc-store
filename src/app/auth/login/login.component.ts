import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.authService.login(this.form.value)) {
        const userRole = this.authService.getUserRole(this.form.value['userName']);
      if (userRole === 'user') {
        this.router.navigate(['user-dashboard']);
        this.toastrService.success( `Welcome ${this.authService.getUserRole(this.form.value['userName'])}`,'Login Successful!');
      } else if (userRole === 'admin') {
        this.router.navigate(['admin-dashboard']);
        this.toastrService.success( `Welcome ${this.authService.getUserRole(this.form.value['userName'])}`,'Login Successful!');
      }
      } else {
        this.toastrService.error( 'Wrong Username or Password','Login Failed!');
      }
    }
    this.formSubmitAttempt = true;
  }

}
