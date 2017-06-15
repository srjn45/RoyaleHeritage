import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFrameComponent } from './category-frame/category-frame.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [CategoryFrameComponent],
	exports: [CategoryFrameComponent]
})
export class GalleryModule { }
