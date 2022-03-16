import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DisplayComponent } from "./react/DisplayComponent";
import { FetchComponent } from "./react/FetchComponent";
import { CounterComponent } from "./react/CounterComponent";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FetchComponent,
    DisplayComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
