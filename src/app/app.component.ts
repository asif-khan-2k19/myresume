import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofile';
  name = 'Asif Khan';
  student = {
    "rno" : "1",
    "name" : "Asif Khan"
  }
}