import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent {
  fullName: string = '';
  email: string = '';
  selectedMuseum: string = '';
  selectedShow: string = '';
  visitDate: string = '';
  ticketCount: number = 1;
  paymentMethod: string = '';
  cardNumber: string = '';
  cardName: string = '';
  expiryDate: string = '';
  cvv: string = '';
  shows: string[] = [];
  tickets: any[] = [];
  showSuccessMessage = false;
  loading = false;

  updateShows() {
    const museumShows: { [key: string]: string[] } = {
      met: ["Art of Egypt", "Medieval Treasures", "Modern Art Exhibition", "Renaissance Art", "Impressionist Paintings"],
      louvre: ["Mona Lisa Tour", "Ancient Greece", "Egyptian Antiquities", "Napoleon's Apartments", "Islamic Art"],
      british: ["Rosetta Stone", "Ancient Rome", "Medieval Europe", "Asian Art", "Enlightenment Gallery"],
      rijks: ["Dutch Masters", "Van Gogh Collection", "Rembrandt's Night Watch", "Golden Age", "Modern Dutch Art"],
      oriental: ["Mesopotamian Art", "Persian Treasures", "Egyptian Artifacts", "Ancient China", "Early Buddhism"]
    };

    this.shows = museumShows[this.selectedMuseum] || [];
  }

  updateTicketFields() {
    this.tickets = Array(this.ticketCount).fill({}).map(() => ({ firstName: '', lastName: '', type: '' }));
  }

  onSubmit() {
    // Inicia a animação de carregamento
    this.loading = true;
    // Simula a submissão do formulário
    setTimeout(() => {
      this.showSuccessMessage = true;
      this.loading = false;
    }, 1000);

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 8000);
  }
}
