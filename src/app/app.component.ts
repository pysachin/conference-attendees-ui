import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { JoiningComponent } from './components/joining/joining.component';
import { ViewAttendeesComponent } from "./components/view-attendees/view-attendees.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, NavbarComponent, ViewAttendeesComponent]
})
export class AppComponent {
  title = 'conference-attendees-ui';
}
