import { AfterViewInit, Component, Input } from '@angular/core'
import { Character } from '../../models/character'

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements AfterViewInit{

  @Input() character?: Character = undefined;


  ngAfterViewInit() {
    console.log(this.character)
  }



}
