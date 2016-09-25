import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  providers: [SpotifyService]
})
export class AlbumComponent {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute,
              private _router: Router){}

  ngOnInit(){
    this._route.params.forEach((params: Params) => {
      let id = params['id']; // (+) converts string 'id' to a number
      //console.log("id = " + id);
      this._spotifyService.getAlbum(id)
        .subscribe(album => {
          this.album = album;
          console.log(this.album);
        })
    });

  }
}
