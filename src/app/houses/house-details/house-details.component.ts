import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { House } from 'src/app/models/house';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  house: House| undefined ;
  members: Character[] = [] ;

  constructor(
    private houseService: HousesService,     
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHouseDetails();
  }
  getHouseDetails() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if(slug) {
      this.houseService.getHouseDetails(slug).subscribe((house: House[]) => {
        this.house = house[0];
        this.members = this.house.members;
      });
    }
  
 }

}
