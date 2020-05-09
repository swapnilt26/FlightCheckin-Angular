import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-showcheckin',
  templateUrl: './showcheckin.component.html',
  styleUrls: ['./showcheckin.component.scss']
})
export class ShowcheckinComponent implements OnInit {

  constructor(private router:Router) { }

  @Input()
    reservationId: number;

  ngOnInit(): void {
  }

  onSelect(Id)
  {
      this.router.navigate(['/startcheckin',Id])
  }

}
