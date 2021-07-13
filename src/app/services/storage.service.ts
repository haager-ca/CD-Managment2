import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.cds = JSON.parse(localStorage.getItem("cds") || "[]");
    if (!this.cds) {
      this.cds = [];
    }
  }

  private cds: string[] = [];

  public getCDs(): string[] {
    return this.cds;
  }

  public setCDs(cds: string[]): void {
    this.cds = cds;
    localStorage.setItem("cds", JSON.stringify(this.cds))
  }
}

