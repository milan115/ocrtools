import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
