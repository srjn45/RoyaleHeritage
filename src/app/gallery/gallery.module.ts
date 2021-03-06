import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { CategoryFrameComponent } from './category-frame/category-frame.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { GalleryService } from "./gallery.service";

@NgModule({
	imports: [
		CommonModule,
		HttpModule
	],
	declarations: [
		CategoryFrameComponent,
		CategoryPanelComponent
	],
	exports: [
		CategoryFrameComponent,
		CategoryPanelComponent
	],
	providers: [
		GalleryService
	]
})
export class GalleryModule { }
