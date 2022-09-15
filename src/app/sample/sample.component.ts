import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  practiceForm: FormGroup;
  addSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.practiceForm = this.fb.group({
      userName: ['', Validators.required],
      Password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      phNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form data is', this.practiceForm.value);

    this.addSubmitted = true;
    // stop the process here if form is invalid
    if (this.practiceForm.invalid) {
      return;
    }
    alert('Form Submitted Successfully');
  }

  ngOnInit(): void {}
  badesab: any = [
    {
      image: '../../assets/images/registerImg.png',
      registerHere: 'Register Here!!',
      firstName: 'First Name',
      lastNmae: 'Last Name',
      email: 'Email Address',
      phNumber: 'Phone Number',
      username: 'Username',
      password: 'Password',
      enterHere: 'Enter here',
      register: 'Register',
      clear: 'Clear',
      smallText: 'Please Enter Your Usename',
    },
  ];
}
export class AppComponent {
  title = 'task-ang';

  constructor(private formBuilder: FormBuilder) {}
  practiceForm = this.formBuilder.group({
    UserName: [''],
    password: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    phNumber: [''],
  });
}
