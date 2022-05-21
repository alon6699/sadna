import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiHost = 'http://localhost:3000/api'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return interval(1000).pipe(switchMap(x => this.http.get(this.apiHost + '/users').pipe(map((data: any) => data.users), tap(console.log)))) 
  }

  addUser(user: Partial<User>) {
    return this.http.post(this.apiHost + '/users', {user}, this.httpOptions).pipe(tap(console.log))
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiHost + `/users/${id}`, this.httpOptions).pipe(tap(console.log))
  }
}
