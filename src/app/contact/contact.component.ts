import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/Contact.model';
import { ApiService } from '../services/api.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm : ContactModel = new ContactModel ();

  constructor(private growler: NotifierService, private apiService: ApiService) {
   }

  ngOnInit(): void {
  }

  sendForm(){
    this.apiService.sendForm(this.ContactForm).subscribe ( form => {},
   err => {
    var errorMessage = JSON.parse(err.error).message;
    this.growler.notify('error','Error sending contact form: '+ errorMessage);
   })
  }


}
