import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl: './step2.component.html'
})
export class Step2Component {
    pageTitle = 'Step 2 Page';

    constructor(private router: Router) { }
    previous() {
        this.router.navigate(['step-1']);
    }

    next() {
        this.router.navigate(['step-3']);
    }
}
