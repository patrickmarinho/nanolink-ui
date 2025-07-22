import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { History } from './components/history/history';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Main, History],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nanolink-ui');
}
