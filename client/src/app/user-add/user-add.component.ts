import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(name: string, email: string) {
    this.usersService.addUser({ name, email }).pipe(take(1)).subscribe();
  }
}
