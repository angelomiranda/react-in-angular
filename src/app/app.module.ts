import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DisplayComponent } from "./wrappers/DisplayComponent";
import { FetchComponent } from "./wrappers/FetchComponent";
import { CounterComponent } from "./wrappers/CounterComponent";

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
