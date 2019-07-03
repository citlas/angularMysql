import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes='row';

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err=> console.error(err)
    )
  }

}
