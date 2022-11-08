import { Component } from "@angular/core";


@Component({
    template: `
        <button [routerLink]="['/', 'dashboard']">NAVBAR - HOME</button><br>
        MY FEATURE
    `
})
export class FeaturePage {

}