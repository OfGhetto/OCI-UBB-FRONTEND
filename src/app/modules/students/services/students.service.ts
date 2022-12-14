
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private headers = new HttpHeaders(
    {  'Content-Type':  'application/json' }
  );

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(url+'/alumno/all');
  }

  getEstablishments(){
    return this.http.get(url+'/establecimiento/all');
  }

  createStudent(data){  
    const option = {headers:this.headers};
    return this.http.post(url+'/alumno/create', data, option);
  }

  getStudentById(id) {
    const option = { headers: this.headers };
    return this.http.post(url+'/alumno/getbyid/', id, option);
  }

  editStudent(data) {
    const option = { headers: this.headers };
    return this.http.put(url+'/alumno/edit', data, option);
  }

  deleteStudent(id) {
    const option = { headers: this.headers };
    return this.http.post(url + '/alumno/delete', id, option);
  }

  getStatistic(data){
    const option = { headers: this.headers };
    return this.http.post(url + '/alumno/getstatistic', data, option);
  }

  getAssistancePerLastCycles(data){
    const option = { headers: this.headers };
    return this.http.post(url + '/alumno/getassistancepertwolastcycles', data, option);
  }
}
