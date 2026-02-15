import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { UserDashboard } from './components/user-dashboard/user-dashboard';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, UserDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit { 

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark-theme' : 'light-theme';
    document.documentElement.classList.add(theme);
  }
}
