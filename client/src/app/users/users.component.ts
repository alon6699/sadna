import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { User } from '../models/users.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  title = "All users"
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).pipe(take(1)).subscribe();
  }
}
