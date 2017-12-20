import { IEmployee } from './iemployee';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throw';

@Injectable()
export class EmployeService {

  constructor(private http: Http) { }

  getFullEmployee(): Observable<IEmployee[]> {

return this.http.get('http://localhost:8080/rest/api/employee/getFullEmployee')
                 .map((response: Response) => <IEmployee>response.json())
                 .catch(this.handleError);
}

  handleError(error: Response) {
      console.error(error);
      return Observable.throw(error);
    }

}


