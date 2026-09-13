import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email: string = '';
  showConfirmation: boolean = false;
  showError: boolean = false;

  submitEmail(): void {
    if (this.validateEmail(this.email)) {
      this.showConfirmation = true;
      this.showError = false;
      this.email = ''; // Limpa o campo do e-mail após submissão
    } else {
      this.showConfirmation = false;
      this.showError = true;
    }

    setTimeout(() => {
      this.showConfirmation = false;
      this.showError = false;
    }, 10000); // Oculta as mensagens após 10 segundos
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
