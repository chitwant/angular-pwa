import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
    })
};

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  empUrl = '';
  constructor(private http: HttpClient) { }
 
  getEmp() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
}

getPosts() {
  this.empUrl = 'https://dummy.restapiexample.com/api/v1/employees';
  return this.http.get(this.empUrl, httpOptions);
}

}
