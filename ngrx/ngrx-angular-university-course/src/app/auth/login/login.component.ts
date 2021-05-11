import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor( private fb:FormBuilder,
    private auth: AuthService,
    private router:Router,) {
      this.form = fb.group({
        email: ['test@angular-university.io', [Validators.required]],
        password: ['test', [Validators.required]]
    });
     }

  ngOnInit(): void {
  }

  login()
  {
    const val = this.form.value;
    this.auth.login(val.email,val.password)
    .pipe(
      tap(user =>{
        console.log(user);
        this.router.navigateByUrl('/courses');
      })
    ).subscribe(
      noop,
      () => alert('Login Failed')
    )
  }

}
