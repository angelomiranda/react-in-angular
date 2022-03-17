import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Fetch from "../react/Fetch";

@Component({
  templateUrl: "../templates/fetch.component.html",
  encapsulation: ViewEncapsulation.None
})
export class FetchComponent implements AfterViewInit {
  @ViewChild("fetchComponent", { static: false }) containerRef: ElementRef;

  ngAfterViewInit() {
    this.render();
  }

  private render() {
    ReactDOM.render(<Fetch />, this.containerRef.nativeElement);
  }
}
