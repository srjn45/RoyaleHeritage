import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LayoutModule } from "./layout/layout.module";
import { GalleryModule } from "./gallery/gallery.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		LayoutModule,
		GalleryModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
