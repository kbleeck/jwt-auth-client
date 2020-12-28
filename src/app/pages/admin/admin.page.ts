import { AuthService } from './../../common/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
