import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,   // important!
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  contactForm!: FormGroup;
  isSending = false;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
    });
  }


  submitForm() {
    console.log('SUBMIT CALLED', this.contactForm.value);

    if (this.contactForm.invalid || this.isSending) return;
    
    this.isSending = true;

    const payload = {
    name: this.contactForm.value.name.trim(),
    email: this.contactForm.value.email.trim(),
    message: this.contactForm.value.message.trim()
    };

    this.http.post('http://localhost:3000/send-mail', payload)
    .subscribe({
    next: () => {
      alert('Message sent successfully');
      this.contactForm.reset();
      this.isSending = false;
    },
    error: () => {
      alert('Failed to send message');
      this.isSending = false;
    }
    });
  }

}