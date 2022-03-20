import { Component } from '@angular/core';

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
    maxZoom : 4,
 }
}
