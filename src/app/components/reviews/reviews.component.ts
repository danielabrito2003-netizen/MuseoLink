import { Component, OnInit } from '@angular/core';

interface Review {
  museumName: string;
  reviewerName: string;
  rating: number;
  comments: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  review: Review = {
    museumName: '',
    reviewerName: '',
    rating: 0,
    comments: ''
  };
  ratings = [1, 2, 3, 4, 5];
  reviews: Review[] = [];
  museums = [
    {
      name: 'The Metropolitan Museum of Art',
      lat: 40.779437,
      lng: -73.963244,
      address: '1000 5th Ave, New York, NY 10028, USA',
      hours: 'Domingo-Quinta: 10h-17h30, Sexta-Sábado: 10h-21h',
      description: 'Um dos maiores e mais prestigiados museus de arte do mundo.'
    },
    {
      name: 'Louvre Museum',
      lat: 48.860611,
      lng: 2.337644,
      address: 'Rue de Rivoli, 75001 Paris, França',
      hours: 'Segunda, Quinta-Domingo: 9h-18h, Quarta, Sexta: 9h-21h45',
      description: 'O maior museu de arte do mundo e um monumento histórico em Paris.'
    },
    {
      name: 'British Museum',
      lat: 51.519413,
      lng: -0.127995,
      address: 'Great Russell St, Bloomsbury, London WC1B 3DG, Reino Unido',
      hours: 'Segunda-Domingo: 10h-17h30',
      description: 'Um dos museus mais abrangentes do mundo, dedicado à história e cultura humana.'
    },
    {
      name: 'Rijksmuseum',
      lat: 52.359998,
      lng: 4.885218,
      address: 'Museumstraat 1, 1071 XX Amsterdam, Países Baixos',
      hours: 'Segunda-Domingo: 9h-17h',
      description: 'Um museu nacional holandês dedicado às artes e à história em Amsterdam.'
    },
    {
      name: 'Institute for the Study of Ancient Cultures Museum',
      lat: 41.789649,
      lng: -87.599702,
      address: '1155 E 58th St, Chicago, IL 60637, EUA',
      hours: 'Terça-Sábado: 10h-18h, Domingo: 12h-18h',
      description: 'Dedicado ao estudo e à exposição das culturas antigas do Oriente Médio e da Ásia.'
    }
  ];
  stars = [1, 2, 3, 4, 5];
  showSuccessMessage = false;

  constructor() {}

  ngOnInit(): void {}

  submitReview(): void {
    this.reviews.push({ ...this.review });
    this.review = {
      museumName: '',
      reviewerName: '',
      rating: 0,
      comments: ''
    };
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 8000);
  }

  setRating(rating: number): void {
    this.review.rating = rating;
  }
}
