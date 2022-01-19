import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() facesnap!:FaceSnap;

  constructor(private faceSnapService : FaceSnapsService,
              private route:ActivatedRoute) { }

  snapStatus!:boolean;
  snapbtntxt!:string;

  ngOnInit(): void {
      this.snapStatus=false;
      this.snapbtntxt='Oh Snap!'
      const faceSnapId = +this.route.snapshot.params['id'];
      this.facesnap = this.faceSnapService.getFaceSnapById(faceSnapId);
    }

  onAddSnapToggle(){
    if(!this.snapStatus){
      this.faceSnapService.snapFaceSnapById(this.facesnap.id,'snap');
      this.snapStatus=true;
      this.snapbtntxt='Oups Unsnap!';
    }else{
      this.faceSnapService.snapFaceSnapById(this.facesnap.id,'unsnap');
      this.snapStatus=false;
      this.snapbtntxt='Oh Snap!';
    }

  }

}
