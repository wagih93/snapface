import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!:FaceSnap;

  constructor(private faceSnapService : FaceSnapsService,
              private router: Router) { }

  snapStatus!:boolean;
  snapbtntxt!:string;

  ngOnInit(): void {
      this.snapStatus=false;
      this.snapbtntxt='Oh Snap!'
    }
    onViewFaceSnap(){
      this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
    }

    onAddSnapToggle(){
      if(!this.snapStatus){
        this.faceSnapService.snapFaceSnapById(this.facesnap.id,'snap')
        this.snapStatus=true;
        this.snapbtntxt='Oups Unsnap!'
      }else{
        this.faceSnapService.snapFaceSnapById(this.facesnap.id,'unsnap');
        this.snapStatus=false;
        this.snapbtntxt='Oh Snap!'
      }

  }

}
