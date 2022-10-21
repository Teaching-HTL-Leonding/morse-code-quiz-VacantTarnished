import { Component, OnInit } from '@angular/core';
import { EncodeService } from './encode.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent {

  constructor(public encodeService: EncodeService) { }


}
