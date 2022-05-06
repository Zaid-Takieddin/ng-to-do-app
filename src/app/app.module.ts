import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskItemComponent,
    TasksComponent,
    CurrencyExchangeComponent,
    HeaderComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
