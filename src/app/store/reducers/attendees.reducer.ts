import { createReducer } from "@ngrx/store";
import { Attendee } from "../../model/attendee.model";
import { on } from "@ngrx/store";
import { addAttendee } from "../actions/attendees.action";

const initState:Attendee[]=[]

export const attendeesReducer = createReducer(
    initState,
    on(addAttendee, (state: any, action: any) => {
        return [...state, action.attendee];
    })
);