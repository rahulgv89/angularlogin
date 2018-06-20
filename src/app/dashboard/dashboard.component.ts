import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees = [];
  players = [];
  constructor(private user: UserService) { }

  ngOnInit() {
      
      this.employees = this.user.getEmployees();
      this.players = this.user.getPlayers();
    }
  }