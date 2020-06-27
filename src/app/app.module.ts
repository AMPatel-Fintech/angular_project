import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule,MatFormFieldModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AlpamatchDirective } from './alpamatch.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponentDailog } from './appdailog.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AlpamatchDirective,
    AppComponentDailog
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  providers: [],
  entryComponents: [
    AppComponentDailog
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
