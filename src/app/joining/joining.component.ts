import { Component } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Observable } from 'rxjs';
import { JobRole } from '../../models/job-role';
import { AsyncPipe } from '@angular/common';
import { Gender } from '../../models/gender';
import { ReferralSources } from '../../models/referral';

@Component({
  selector: 'app-joining',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './joining.component.html',
  styleUrl: './joining.component.css',
})
export class JoiningComponent {

  jobRoles$!: Observable<JobRole[]>;
  genders$!: Observable<Gender[]>;
  referrals$!: Observable<ReferralSources[]>;

  constructor(private utilityService : UtilityService){
  }

  ngOnInit(): void {
    this.jobRoles$ = this.utilityService.getJobRoles();
    this.genders$ = this.utilityService.getGenders();
    this.referrals$ = this.utilityService.getReferrals();
  }
}
