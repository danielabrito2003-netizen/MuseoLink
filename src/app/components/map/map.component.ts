import { Component, OnInit } from '@angular/core';

declare var google: any;

interface Museum {
  name: string;
  lat: number;
  lng: number;
  address: string;
  hours: string;
  description: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  museums: Museum[] = [
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

  selectedMuseum: Museum | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  onMuseumChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const museumName = selectElement.value;
    this.selectedMuseum = this.museums.find(museum => museum.name === museumName);
    if (this.selectedMuseum) {
      this.setMapLocation(this.selectedMuseum.lat, this.selectedMuseum.lng);
    }
  }

  initMap(): void {
    const defaultLocation = { lat: 40.779437, lng: -73.963244 }; // Default to The Metropolitan Museum of Art
    const map = new google.maps.Map(document.getElementById('map'), {
      center: defaultLocation,
      zoom: 12
    });

    new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: 'The Metropolitan Museum of Art'
    });
  }

  setMapLocation(lat: number, lng: number): void {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: lat, lng: lng },
      zoom: 15
    });

    new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map
    });
  }
}
