import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobList } from "./components/job-list/job-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('y');
}
