import { Component, inject, signal,} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NanoLinkShortenerService, ShortenUrlResponse } from '../../service/nano-link-shortener-service';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [ReactiveFormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  private shortenerService = inject(NanoLinkShortenerService);
  errorMessage = signal<string>('');
  shortenedUrl = signal<string>('');
  isCopied = signal<boolean>(false);
  isLoading = signal<boolean>(false);

  urlForm = new FormControl("", [
    Validators.required,
    // Validators.pattern(this.urlPattern)
  ]);

  submit(){
    this.errorMessage.set('');
    this.shortenedUrl.set('');
    this.isCopied.set(false);
    this.isLoading.set(false);

    if(this.urlForm.invalid){
      this.errorHandling()
      return;
    }

    const body = {"originalUrl": this.urlForm.value}

    this.shortenerService.shortenUrl(this.urlForm.value!).pipe(
      catchError(err => {
        this.isLoading.set(true);
        console.log(this.isLoading);
        this.errorMessage.set('Falha ao encurtar a URL. Tente novamente.');
        return of(null);
      })
    ).subscribe((response: ShortenUrlResponse | null) => {
      const newUrl = response!.shortUrl;
      this.urlForm.setValue("http:localhost:8080/" + newUrl);
      console.log(newUrl);
    });
  }

  errorHandling(){
    if (this.urlForm.hasError("required")) {
      this.errorMessage.set("Insira uma URL");
    }
  }
}
