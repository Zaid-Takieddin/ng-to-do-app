import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'currencyExchange', component: CurrencyExchangeComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
