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

import Display from "../react/Display";

@Component({
  selector: "display",
  templateUrl: "../templates/display.component.html",
  encapsulation: ViewEncapsulation.None
})
export class DisplayComponent implements AfterViewInit {
  @ViewChild("displayComponent", { static: false }) containerRef: ElementRef;

  ngAfterViewInit() {
    this.render();
  }

  private render() {
    ReactDOM.render(<Display />, this.containerRef.nativeElement);
  }
}
