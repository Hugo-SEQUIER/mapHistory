import { Component } from '@angular/core';
import { LISTPAYS2022} from './mockPays2022';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapHistory';

  mapOptions: google.maps.MapOptions = {
    center: { lat: 0, lng: 0 },
    zoom : 2,
    disableDefaultUI: true,
    minZoom : 2,
    maxZoom: 5,
    mapId : "8e6ae4fbc9cfc123",
 }

 pays2022=LISTPAYS2022;
}
