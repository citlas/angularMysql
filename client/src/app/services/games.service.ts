import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/games'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
API_URI= 'http://localhost:3000/api/games';

  constructor(private http: HttpClient) {}
    getGames(){
      return this.http.get(`${this.API_URI}`)
   }

   getGame(id: string){
    return this.http.get(`${this.API_URI}/${id}`)
  }

  saveGame(game: Game){
    return this.http.post(`${this.API_URI}`, game)
  }

  deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/${id}`)
  }

  updateGame(id: string|number, updatedGame: Game):Observable<Game>{
    return this.http.put(`${this.API_URI}/${id}`,updatedGame)
  }
}
