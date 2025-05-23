import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
   constructor(private readonly titleService: Title, private readonly metaService: Meta) {
    this.titleService.setTitle('The Code Haven, Inc. - Software Consultancy');
    this.metaService.addTags([
      { name: 'description', content: 'The Code Haven, Inc. - Software Consultancy' },
      { name: 'keywords', content: 'Angular, Software, Consultancy, The Code Haven' },
      { name: 'author', content: 'The Code Haven, Inc.' },
    ]);
  }
}
