import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User-Model/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/heliverse_mock_data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getUsersWithPagination(page: number, pageSize: number): Observable<User[]> {
    const url = `${this.usersUrl}?page=${page}&pageSize=${pageSize}`;
    return this.http.get<User[]>(url);
  }
}
