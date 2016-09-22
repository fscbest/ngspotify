import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit{
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute,
              private _router: Router){}

  ngOnInit(){
    this._route.params.forEach((params: Params) => {
      let id = params['id']; // (+) converts string 'id' to a number
      //console.log("id = " + id);
      this._spotifyService.getArtist(id)
        .subscribe(artist => {
          this.artist = artist;
          console.log(this.artist);
        })
    });

  }
}
