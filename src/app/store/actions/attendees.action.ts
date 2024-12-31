import { createAction, props } from "@ngrx/store";
import { Attendee } from "../../model/attendee.model";


export const addAttendee = createAction(
        '[Attendees] Add Attendee', 
        props<{ attendee: Attendee }>()
);