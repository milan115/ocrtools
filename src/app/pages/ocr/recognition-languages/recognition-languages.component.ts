/**
 * Recognition Languages Component
 * @author    AppsPlaces <https://codecanyon.net/user/appsplaces>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Component, OnInit } from '@angular/core';
import { LanguageListService } from '../../../services/language-list.service';


@Component({
  selector: 'app-recognition-languages',
  templateUrl: './recognition-languages.component.html',
  styleUrls: ['./recognition-languages.component.css']
})
export class RecognitionLanguagesComponent implements OnInit {

  languages: any;

  constructor(private languageListService: LanguageListService) { }

  ngOnInit() {
    this.getLanguageList();
  }

  // Get All Supported OCR Language List 
  getLanguageList(): void {
    this.languages = this.languageListService.languageList();
  }
}
