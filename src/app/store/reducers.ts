
import { ActionReducerMap } from '@ngrx/store';
import * as fromAttendees from './attendees.reducer'; // Adjust the path as necessary

export interface AppState {
  attendees: fromAttendees.State;
}

export const reducers: ActionReducerMap<AppState> = {
  attendees: fromAttendees.reducer,
};