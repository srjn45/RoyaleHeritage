import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

import 'rxjs/Rx';

@Injectable()
export class GalleryService {

  constructor(
    private http: Http
  ) { }

  public getImagesInDir(dir: String): Promise<String[]> {
    return this.http.get("assets/api/getImages.php?path=" + dir).map(response => response.json() as String[]).toPromise();
  }

}
