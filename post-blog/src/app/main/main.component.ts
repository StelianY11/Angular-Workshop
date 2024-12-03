import { Component } from '@angular/core';
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemeListComponent, PostsListComponent, HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(private userService: UserService) {}
}
