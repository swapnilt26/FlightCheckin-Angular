import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.scss']
})
export class StartcheckinComponent implements OnInit {

      data:any;
      checkedInResponse:any;

  constructor(private router:Router,private service:DataService, private route:ActivatedRoute) { }

    @Input()
      numberOfBags: number;
    
  ngOnInit(): void {
      var id =Number.parseInt(this.route.snapshot.paramMap.get("id"));
        this.service.getReservation(id).subscribe(res=>{
            this.data=res;
        })
  }

  checkIn(noOfBags)
  {
      var checkInRequest:any = new Object();
      checkInRequest.id = this.data.id;
      checkInRequest.checkedIn = true;
      checkInRequest.numberOfBags = noOfBags;
      this.service.checkin(checkInRequest).subscribe(res=>{
        this.checkedInResponse = res;
      }) 

      this.router.navigate(['confirmcheckin'])
  }
}
