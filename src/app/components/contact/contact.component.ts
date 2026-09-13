import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showSuccessMessage = false;
  loading = false;

  /**
   * Função chamada ao submeter o formulário
   * @param form - Objeto do formulário
   */
  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }

    this.loading = true;
    // Simular a submissão do formulário
    setTimeout(() => {
      this.showSuccessMessage = true;
      this.loading = false;
      form.resetForm();
    }, 2000);

    // Ocultar a mensagem após 5 segundos
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 7000);
  }
}
