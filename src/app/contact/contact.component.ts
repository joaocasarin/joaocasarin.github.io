import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitContact() {
    console.log(`Hi, my name is ${this.name}, and you can send me '${this.message}' using my e-mail ${this.email}.`)
  }
}
