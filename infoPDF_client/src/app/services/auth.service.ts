import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    this.http.get("http://localhost:8000/").subscribe((res) => {

    console.log(res);
    });

  }
}
