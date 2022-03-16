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

import Fetch from "./Fetch";

@Component({
  selector: "fetch",
  templateUrl: "../main/fetch.component.html",
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
