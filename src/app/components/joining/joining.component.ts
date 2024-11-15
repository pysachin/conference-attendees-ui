import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { Observable } from 'rxjs';
import { JobRole } from '../../../models/job-role';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Gender } from '../../../models/gender';
import { ReferralSources } from '../../../models/referral';
import { FormBuilder, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowFcErrorDirective } from '../../directives/show-fc-error.directive';

@Component({
  selector: 'app-joining',
  standalone: true,
  imports: [AsyncPipe,ReactiveFormsModule,ShowFcErrorDirective,JsonPipe],
  templateUrl: './joining.component.html',
  styleUrl: './joining.component.css',
})
export class JoiningComponent {

  jobRoles$!: Observable<JobRole[]>;
  genders$!: Observable<Gender[]>;
  referrals$!: Observable<ReferralSources[]>;

  joiningForm = this.fb.group({
    firstName: ['',[
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(15)
                  ]
              ],
    lastName: [''],
    email: [''],
    phone: [''],
    referralId: [''],
    jobRoleId: [''],
    genderId: [''],
  });

  constructor(private utilityService : UtilityService,
              private fb: FormBuilder
  ){
  }

  ngOnInit(): void {
    this.jobRoles$ = this.utilityService.getJobRoles();
    this.genders$ = this.utilityService.getGenders();
    this.referrals$ = this.utilityService.getReferrals();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.joiningForm);
    console.warn(this.joiningForm.value);
  }
}
