import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading: boolean = false;
  submitText: string = 'Send';

  name: string;
  email: string;
  message: string;

  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
  }

  async submitContact() {
    this.loading = true;
    this.submitText = 'Sending...';

    this.ContactService.sendMail({
      email: this.email,
      subject: `Portfolio Contact - ${this.name}`,
      message: this.message }).subscribe(() => {
        window.alert(`E-mail sent successfully!`);
        this.loading = false;
        this.submitText = 'Send';

        this.name = '';
        this.email = '';
        this.message = '';
      }, error => {
        window.alert(`An error occured!\nError: ${error}`);
        this.loading = false;
        this.submitText = 'Send';

        this.name = '';
        this.email = '';
        this.message = '';
      });


  }
}
