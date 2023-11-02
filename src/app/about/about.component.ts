import { Component, OnInit } from "@angular/core";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  title: string = "Hola, mi nombre es Marc ";
  paragraph: string = "";

  constructor() {}

  ngOnInit() {}
}
