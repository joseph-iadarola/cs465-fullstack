import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
//import { trips } from '../data/trips';
import { TripDataService } from 'src/app/services/trip-data.service';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[];
  message: string;

  constructor(
    private tripDateService: TripDataService,
    private router: Router
    ) { }

    private addTrip(): void{
      console.log('Inside TripListingComponent#addTrip');
      this.router.navigate(['add-trip']);
    }
  
  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Search for trips';
    this.tripDateService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips found';
          this.trips = foundTrips;
        });
  }

  ngOnInit(): void {
    this.getTrips();
  }

}
