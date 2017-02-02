import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Signup {
    email: string;
    password: string;
    repeatPassword: string;
}

@Component({
    templateUrl: './step1.component.html'
})

export class Step1Component {
    public signupForm: FormGroup;
    public mailValid = true;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['your', [Validators.required, Validators.minLength(4)]],
            repeatPassword: ['', [Validators.required]]
        });
    }

    // methods
    signup(signup: Signup, isValid: boolean) {
        if (!isValid) {
            console.log('not valid');
            this.mailValid = false;
        }


    }

}
