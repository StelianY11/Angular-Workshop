import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes;
      this.isLoading = false;
    });
  };
}
