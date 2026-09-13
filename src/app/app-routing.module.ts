import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HistoryComponent } from './components/history/history.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapComponent } from './components/map/map.component';
import { EventsComponent } from './components/events/events.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ContactComponent } from './components/contact/contact.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VisiteComponent } from './components/visite/visite.component';
import { TrabalhoComponent } from './components/trabalho/trabalho.component';
import { BlogComponent } from './components/blog/blog.component';
import { PrivacidadeComponent } from './components/privacidade/privacidade.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { AcessibilidadeComponent } from './components/acessibilidade/acessibilidade.component';
import { TermosComponent } from './components/termos/termos.component';
import { EnglishSiteComponent } from './components/english-site/english-site.component';
import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'map', component: MapComponent },
  { path: 'events', component: EventsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contactos', component: ContactComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'visite', component: VisiteComponent },
  { path: 'trabalho', component: TrabalhoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'privacidade', component: PrivacidadeComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'acessibilidade', component: AcessibilidadeComponent },
  { path: 'termos', component: TermosComponent },
  { path: 'english_site', component: EnglishSiteComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
