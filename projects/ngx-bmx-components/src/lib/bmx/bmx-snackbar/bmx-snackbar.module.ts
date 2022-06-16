import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmxSnackbarComponent } from './bmx-snackbar/bmx-snackbar.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    BmxSnackbarComponent
  ],
	imports: [
		CommonModule,
		FlexLayoutModule
	]
})
export class BmxSnackbarModule { }
