import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  constructor(private router: Router) { }

  navigateToHistoria(): void {
    this.router.navigate(['/historia']);
  }
}
