import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  constructor(private authService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    const user = {username: this.username, password: this.password} ;
     this.authService.login(user).subscribe((res: any) => {
      if (res.access_token) {
        console.log(res);
        localStorage.setItem('authorization', res.access_token);
        localStorage.setItem('site_id', res.site_id);
      }
      this.router.navigate(['./landing']);
    });

  }
}
