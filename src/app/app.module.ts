import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importação do módulo de roteamento
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    HistoryComponent,
    GalleryComponent,
    MapComponent,
    EventsComponent,
    ReviewsComponent,
    ContactComponent,
    SobreComponent,
    VisiteComponent,
    TrabalhoComponent,
    BlogComponent,
    PrivacidadeComponent,
    CookiesComponent,
    AcessibilidadeComponent,
    TermosComponent,
    EnglishSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importação do módulo de roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
