import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http:HttpClient) { }

 public getImageOfTheDay():Observable<any> {
return this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=zfeOM59PscEC5fsWcQxqAdcYh8tBreLFz1nrdfjk`);

  };
}
