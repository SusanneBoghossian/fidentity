import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl: './step1.component.html'
})
export class Step1Component {
    pageTitle = 'Step 1 Page';

    constructor(private router: Router) { }
    previous() {
        this.router.navigate(['step-1']);
    }
    next() {
        this.router.navigate(['step-2']);
    }

}
