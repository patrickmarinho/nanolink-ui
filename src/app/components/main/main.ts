import { Component, signal,} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  errorMessage = signal("");

  urlControl = new FormControl("", [
    Validators.required,
    Validators.pattern(".*\\.com.*")
  ]);

  shortenUrl() {
    if (this.urlControl.valid) {
      console.log("URL a ser encurtada:", this.urlControl.value);
      this.errorMessage.set("");
      return;
    }

    if (this.urlControl.hasError("required")) {
      this.errorMessage.set("Insira uma URL");
    } else if (this.urlControl.hasError("pattern")) {
      this.errorMessage.set("Insira uma URL válida");
    }
  }
}
