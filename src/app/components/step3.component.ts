import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    templateUrl: './step3.component.html'
})
export class Step3Component {
    pageTitle = 'Step 3 Page';

    constructor(private router: Router) { }
    previous() {
        this.router.navigate(['step-2']);
    }

    next() {
        this.router.navigate(['step-3']);
    }
}
