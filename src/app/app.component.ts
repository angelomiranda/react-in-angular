// https://medium.com/@zacky_14189/embedding-react-components-in-angular-the-easy-way-60f796b68aef
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  companyName = "First Republic";
}
