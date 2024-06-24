// feedback-modal.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
imports: [ FormsModule, CommonModule ],
  standalone: true,
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css']
})
export class FeedbackModalComponent {
  @Input() candidate: any; // Candidato que está sendo avaliado
  @Output() submitFeedback = new EventEmitter<string>(); // Evento para enviar o feedback
  @Output() closeModalEvent = new EventEmitter<void>();
  feedback: string = ''; // Feedback a ser fornecido

  constructor() { }

  onSubmit(): void {
    this.submitFeedback.emit(this.feedback);
    this.feedback = ''; // Limpar o campo de feedback após enviar
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
