import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doce';

  doces = [
  	{ doce: 'Brigadeiro' },
  	{ doce: 'Cookie' },
  	{ doce: 'Brownie' },
  ]

  myFunc(count) {
  	console.log(count.value);
  }

  alertStatus(status) {
  	if (status == 'danger')
  		return true;
  }

  property1 = false;
  property2 = false;
  property3 = true;
  myClasses = {
  	danger: this.property1,
  	safe:	this.property2,
  	changed:this.property3
  }

  ngStyles = {
  	'color': 'red',
  	'font-weight': 'bold'
  }
  myWeight = "bold";
  newWeight = false;
  logoUrl='http://pngimages.net/sites/default/files/linkedin-logo-png-image-69211.png';
  buttonState = true;
  typed:string = "";
  toggleLogo() {
  	this.buttonState = (this.buttonState ? false : true)
  }
  keyPress(event) {
  	this.typed = event;
  }

}
