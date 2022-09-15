import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-ang';

  constructor( private formBuilder:FormBuilder){
   
  }
  profileForm= this.formBuilder.group({
    UserName:[''],
    password:[''],
    firstName:[''],
    lastName:[''],
    email:[''],
    phNumber:['']

  })
}
