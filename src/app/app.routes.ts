import { Routes } from '@angular/router';
import { JoiningComponent } from './components/joining/joining.component';
import { ViewAttendeesComponent } from './components/view-attendees/view-attendees.component';


export const routes: Routes = [    
    {path:"join",component:JoiningComponent},
    {path:"",component:ViewAttendeesComponent}
];
