import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';

@Component({
  selector: 'app-theme-details',
  standalone: true,
  imports: [],
  templateUrl: './theme-details.component.html',
  styleUrl: './theme-details.component.css'
})
export class ThemeDetailsComponent implements OnInit {
  theme = {} as Theme;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    console.log(this.theme);
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {

    })

    const id = this.route.snapshot.params["themeId"];

    this.apiService.getSingleTheme(id).subscribe(theme => {
      this.theme = theme;
    })
  }
}
