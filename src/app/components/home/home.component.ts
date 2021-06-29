import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cdTitle: string = "Die drei ???1";
  public showAlert: boolean = true;
  public newCdTitle: string = "";
  public cds: string[] = [
    "Die drei ??? Teil 1",
    "Die drei ??? Teil 2",
    "Die drei ??? Teil 3",
    "Die drei ??? Teil 4",
    "Die drei ??? Teil 5",
    "Die drei ??? Teil 6"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public transformCdTitle(title: string): string {
    return "Buch: " + title;
  }

  public addNewCD() {
    // this.showAlert = !this.showAlert;
    this.cds.push(this.newCdTitle);
    this.newCdTitle = "";
  }


}


