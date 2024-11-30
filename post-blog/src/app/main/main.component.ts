import { Component } from '@angular/core';
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemeListComponent, PostsListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
