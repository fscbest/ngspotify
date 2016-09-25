import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [ BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  declarations: [ AppComponent,
    NavbarComponent,
    AboutComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
