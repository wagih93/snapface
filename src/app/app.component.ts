import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;

  ngOnInit(): void {
    this.mySnap= new FaceSnap(
      'Tupac',
      'Tupac Shakur a gangster rap leader',
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3Mzg1Mzg5MzI4NDQzMDYz/tupac_shakur_photo_by_steve_eichner_archive_photos_getty_83928439.jpg',
      new Date(),
      6
    )
  }
}
