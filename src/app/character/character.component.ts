import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: PeopleService,
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  private getCharacter() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.characterService.getPerson(slug).subscribe((character:Character[]) => {
        this.character = character[0];
        console.log(this.character);
      });
    }
  }
}
