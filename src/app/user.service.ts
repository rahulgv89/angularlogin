import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getEmployees(){
    return[
          {"name": "Lionel Messi", "position": "Forward", "country": "Argentina", "club": "Barcelona"},
          {"name" :"Cristiano Ronaldo", "position" :"Forward", "country":"Portugal", "club":"Real Madrid"},
          {"name" :"Xavi", "position" :"Midfielder", "country":"Spain", "club":"Al Sadd"}
    ]
  }
  
  
  getPlayers(){
    return[
          {"name": "Frank Lampard", "position": "Midfielder", "country": "England ", "club": " 	Derby Count"},
          {"name" :" 	Zinedine Zidane", "position" :"Midfielder", "country":"France", "club":"Real Madrid"},
          {"name" :" 	Samuel Eto", "position" :"Striker", "country":"Cameroon", "club":"Konyaspor"}
    ]
  }
  
  constructor(){}

}
