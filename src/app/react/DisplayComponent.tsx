import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";

import Display from "./Display";

@Component({
  selector: "display",
  templateUrl: "../main/display.component.html",
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
