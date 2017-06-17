import { Component, OnInit, Input } from '@angular/core';

import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-category-frame',
  templateUrl: './category-frame.component.html',
  styleUrls: ['./category-frame.component.css']
})
export class CategoryFrameComponent implements OnInit {

  @Input() path: String;

  imgSrcArr: String[] = [];
  imgSrc: String = "";
  currentImg: number = 0;


  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit() {
    this.galleryService.getImagesInDir(this.path).then(data => { this.imgSrcArr = data });
    setInterval(() => {
      if (this.imgSrcArr != null && this.imgSrcArr.length > 0) {
        this.imgSrc = "assets/images/" + this.imgSrcArr[this.currentImg++];
        this.currentImg %= this.imgSrcArr.length;
      }
    }, 4000);
  }

}
