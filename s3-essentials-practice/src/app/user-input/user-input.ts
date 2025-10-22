import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal('0');
  annualReturn = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  // constructor(private investmentService: InvestmentService) {}
  private investmentService: InvestmentService = inject(InvestmentService);

  onSubmit() {
    const data = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualReturn(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
    };

    this.investmentService.calculateInvestmentResults(data);

    this.initialInvestment.set('0');
    this.annualReturn.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
  }
}
