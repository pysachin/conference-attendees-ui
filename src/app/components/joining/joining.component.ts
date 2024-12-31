import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { Observable } from 'rxjs';
import { JobRole } from '../../../models/job-role';
import { AsyncPipe } from '@angular/common';
import { Gender } from '../../../models/gender';
import { ReferralSources } from '../../../models/referral';
import { FormBuilder, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ShowFcErrorDirective } from '../../directives/show-fc-error.directive';
import  {NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask} from 'ngx-mask'
import { Attendee } from '../../model/attendee.model';
import { Store } from '@ngrx/store';
import { addAttendee } from '../../store/actions/attendees.action';
import { ViewAttendeesComponent } from "../view-attendees/view-attendees.component";
@Component({
  selector: 'app-joining',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, ShowFcErrorDirective, NgxMaskDirective, ViewAttendeesComponent],
  templateUrl: './joining.component.html',
  styleUrl: './joining.component.css',
  providers:[provideNgxMask()]
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
    email: ['',[
                Validators.required,
                Validators.email                
              ]
          ],
    phone: ['',[
                Validators.required                
              ]
    ],
    referralId: [''],
    jobRoleId: [''],
    genderId: ['',[
                  Validators.required                
                ]
    ],
  });

  constructor(private utilityService : UtilityService,
              private fb: FormBuilder,
              private store:Store<{attendees:Attendee[]}>
  ){
  }

  ngOnInit(): void {
    this.jobRoles$ = this.utilityService.getJobRoles();
    this.genders$ = this.utilityService.getGenders();
    this.referrals$ = this.utilityService.getReferrals();
  }

  onSubmit() {
    if (this.joiningForm.invalid) {
      return;
    }
    // TODO: Use EventEmitter with form value
    console.warn(this.joiningForm);
    console.warn(this.joiningForm.value);

    const attendee: Attendee = {
      firstName: this.joiningForm?.value?.firstName ?? '',
      lastName: this.joiningForm?.value?.lastName ?? '',
      email: this.joiningForm?.value?.email ?? '',
      phone: this.joiningForm?.value?.phone ?? '',
      referralId: this.joiningForm?.value?.referralId ?? '',
      jobRoleId: this.joiningForm?.value?.jobRoleId ?? '',
      genderId: this.joiningForm?.value?.genderId ?? ''   
    };

    this.store.dispatch(addAttendee({attendee}));
  }
}
