import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  public cdTitle: string = "Die drei ???1";
  public showAlert: boolean = true;
  public newCdTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public cds: string[] = [];


  ngOnInit(): void {
    this.cds = this.storageService.getCDs();
  }

  public transformCdTitle(title: string): string {
    return "Buch: " + title;
  }

  public addNewCD() {
    // this.showAlert = !this.showAlert;
    this.cds.push(this.newCdTitle);
    this.storageService.setCDs(this.cds);
    this.newCdTitle = "";
  }

}


