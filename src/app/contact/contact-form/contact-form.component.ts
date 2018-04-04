import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Contact} from '../contact';

@Component({
    selector: 'htm-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

    contact = new Contact("", "", "");

    contactForm: FormGroup;

    submitted = false;

    captchaValid = false;

    captchaResponse(event: any) {
        this.captchaValid = true;
    }

    captchaExpire() {
        this.captchaValid = false;
    }

    onSubmit() {
        this.submitted = true;
    }

    isFormValid(formValidity: boolean): boolean {
        return ((formValidity == true) && this.captchaValid == true);
    }

    constructor(private formBuilder: FormBuilder) {
        this.buildForm();
    }

    buildForm() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required],
            phone: [''],
        });
    }

    /*
     * FormControls getters
     */

    get name() {return this.contactForm.get('name');}
    get email() {return this.contactForm.get('email');}
    get message() {return this.contactForm.get('message');}
    get phone() {return this.contactForm.get('phone');}

    /*
     * FormControls errors
     */

    emailErrors() {
        return (this.email.hasError('required')) ? "Saisissez une adresse e-mail" :
               (this.email.hasError('email')) ? "Saisissez une adresse e-mail valide" : "";
    }

    nameErrors() {
        return (this.name.hasError('required')) ? "Saissisez un nom" : "";
    }

    messageErrors() {
        return (this.message.hasError('required')) ? "Saissisez un message" : "";
    }

    ngOnInit() {
    }

}