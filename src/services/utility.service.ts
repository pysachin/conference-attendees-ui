import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobRole } from '../models/job-role';
import { Gender } from '../models/gender';
import { ReferralSources } from '../models/referral';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  conferenceApiUrl : string = environment.conferenceApiUrl;
  constructor(private http: HttpClient) { }

  getJobRoles(): Observable<JobRole[]> {
    return this.http.get<JobRole[]>(`${this.conferenceApiUrl}/JobRoles`);
  }

  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(`${this.conferenceApiUrl}/Genders`);
  }

  getReferrals(): Observable<ReferralSources[]> {
    return this.http.get<ReferralSources[]>(`${this.conferenceApiUrl}/ReferralSources`);
  }

}
