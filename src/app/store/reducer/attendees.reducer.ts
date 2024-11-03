import { createReducer } from "@ngrx/store";
import { Attendee } from "../../model/attendee.model";

const initState:Attendee[]=[]

export const attendeesReducer = createReducer(initState);