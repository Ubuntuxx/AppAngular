import { Component } from "@angular/core";

@Component({
    selector: 'footer-page',
    templateUrl: './footer.component.html',
    styleUrls:['footer.component.css']
})

export class FooterComponent {
    public autor: any = {nombre: 'Luis', apellido: 'Amador'}
}
