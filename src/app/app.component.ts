import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
declare var particlesJS: any;

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "hello-angular";

  ngOnInit(): void {
    particlesJS.load("particles", "particles.json", () => {
      console.log("particles.js config loaded");
    });
  }
}
