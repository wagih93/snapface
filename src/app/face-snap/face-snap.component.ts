import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!:FaceSnap;


snapStatus!:boolean;
snapbtntxt!:string;

ngOnInit(): void {
    this.snapStatus=true;
    this.snapbtntxt='Oh Snap!'

  }
  onAddSnap(){
    this.facesnap.snaps++;
    this.snapStatus=false;
    this.snapbtntxt='Oups unsnap'
    }
  onRemoveSnap(){
    this.facesnap.snaps--;
    this.snapStatus=true;
    this.snapbtntxt='Oh Snap!'
  }
  onAddSnapToggle(){
    this.snapStatus ? this.onAddSnap() : this.onRemoveSnap()
  }

}
