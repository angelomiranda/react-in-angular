import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { DisplayComponent } from "./wrappers/DisplayComponent";
import { FetchComponent } from "./wrappers/FetchComponent";
import { CounterComponent } from "./wrappers/CounterComponent";

const routes: Routes = [
  { path: "display", component: DisplayComponent },
  { path: "fetch", component: FetchComponent },
  { path: "counter", component: CounterComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
