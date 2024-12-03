import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-theme-details',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './theme-details.component.html',
  styleUrl: './theme-details.component.css'
})
export class ThemeDetailsComponent implements OnInit {
  theme = {} as Theme;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
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
