import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
})
export class FaceSnapsService {

  faceSnaps:FaceSnap[] = [
    {
    id:1,
    title: 'Tupac',
    description: 'Tupac Shakur a gangster rap leader',
    imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3Mzg1Mzg5MzI4NDQzMDYz/tupac_shakur_photo_by_steve_eichner_archive_photos_getty_83928439.jpg',
    createdDate: new Date(),
    snaps: 32,
    location:'California'
   },
   {
    id:2,
    title: 'Snoop Dogg',
    description: 'Snoopy Doopy Rapper',
    imageUrl: 'https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fmultiupload_du_06_avril_2012.2Fsnoop-dogg.2F1879502-1-fre-FR.2Fsnoop-dogg.2Ejpg/480x480/quality/80/snoop-dogg-publie-un-livre-a-fumer.jpg',
    createdDate: new Date(),
    snaps: 28,
    location:'West Coast'
   },
   {
     id:3,
    title: 'Dr Dre',
    description: 'Rapper and Beats Owner',
    imageUrl: 'https://www.raprnb.com/wp-content/uploads/2021/08/dr-dre.png',
    createdDate: new Date(),
    snaps: 11
   }
 ];
 getAllFaceSnaps(): FaceSnap[] {
  return this.faceSnaps;
 }

 getFaceSnapById(faceSnapId : number):FaceSnap{
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if(!faceSnap){
    throw new Error('FaceSnap Not Found')
  }  else {
      return faceSnap;
    }
 }
 snapFaceSnapById(faceSnapId:number,snapType : 'snap' | 'unsnap'): void{
  const faceSnap =this.getFaceSnapById(faceSnapId);
  snapType==='snap' ? faceSnap.snaps++ : faceSnap.snaps--;
 }
}
