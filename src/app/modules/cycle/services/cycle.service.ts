import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  
  cycle;
  private headers = new HttpHeaders(
    { 'Content-Type': 'application/json' }
  );

  constructor(private http: HttpClient) { 
    this.cycle = {};
  }

  getCycles(){
    return this.http.get(url +'/ciclo/all');
  }

  getCoordinators(){
    return this.http.get(url +'/coordinador/all');
  }

  createCycle(data){
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/create', data, option);
  }

  deleteCycle(id) {
    const option = { headers: this.headers };
    return this.http.post(url + '/ciclo/delete',id,option);
  }

  getCycleById(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getbyid/', data, option);
  }

  getCycleByFinishDate(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getbyfinishdate', data, option);
  }

  editCycle(data) {
    const option = { headers: this.headers };
    return this.http.put(url+'/ciclo/edit', data, option);
  }

  sendEmails(data){
    const option = { headers: this.headers };
    return this.http.post(url +'/mail/inv', data, option);
  }

  chargeEstablishments(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/chargeestablishments', data, option);
  }

  updateEstablishments(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/updateestablishments', data, option);
  }

  deleteEstablishments(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/deleteestablishments', data, option);
  }

  chargeStudents(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/chargestudents', data, option);
  }

  updateCandidates(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/updatecandidates', data, option);
  }

  deleteStudents(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/deletestudents', data, option);
  }

  getStudentsCandidatePerCycle(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentscandidate', data, option);
  }

  getStudentsCandidatePerCyclePerFinishDate(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentscandidatepercycleperfinishdate', data, option);
  }

  getStudentsEnrolledPerCycle(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentsenrolled', data, option);
  }

  getStudentsEnrolledPerCyclePerFinishDate(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentsenrolledpercycleperfinishdate', data, option);
  }

  getAssistancePerDateAndCycle(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getassistanceperdateandcycle', data, option);
  }

  getStudentAssistancePerCycleAndEstablishment(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentassistancepercycleandestablishment', data, option);
  }

  getStudentAssistancePerCycle(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstudentassistancepercycle', data, option);
  }

  getStatisticsPerCycle(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getstatisticspercycle', data, option);
  }

  checkSystem(){
    return this.http.get(url +'/ciclo/check');
  }

  getStudentPerEstablishment(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/studentsperestablishments', data, option);
  }

  getLastTwoCyclesWithTotal(data) {
    const option = { headers: this.headers };
    return this.http.post(url+'/ciclo/getlasttwocycleswithtotal', data, option);
  }
}
