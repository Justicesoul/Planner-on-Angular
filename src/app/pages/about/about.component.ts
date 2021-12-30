import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title: string = 'About Angular';

  about = {
    createdAt: '2011-10-05T14:48:00.000Z',
    description: 'An awesome page',
    rating: 13.5738292847
  }

  showDescription = false;

  public toggleShowDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
