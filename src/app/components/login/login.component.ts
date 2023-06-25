import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private api: MyserviceService, private router: Router) { }

  //Want to have focus on input 
  @ViewChild('myEmail', { static: true }) myCustomInput: any;

  ngOnInit() {
    //to have focus on input
    this.myCustomInput.nativeElement.focus()
  }

  data: any = {
    email: this.email,
    password: this.password
  }
  onLogin = () => {
    this.data.email = this.email;
    this.data.password = this.password
    this.api.handleLogin(this.data).subscribe((data: any) => {
      if (data.status == 'Ok') {
        this.router.navigate(['/user'])
      }
    })
  }
}
