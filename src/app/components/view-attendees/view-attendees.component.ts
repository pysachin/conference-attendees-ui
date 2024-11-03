import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Attendee } from '../../model/attendee.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-attendees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-attendees.component.html',
  styleUrl: './view-attendees.component.css'
})
export class ViewAttendeesComponent {

  attendees$:Observable<Attendee[]>;

  constructor(private store:Store<{attendees:Attendee[]}>){
    this.attendees$ = store.select("attendees");
  }

}
