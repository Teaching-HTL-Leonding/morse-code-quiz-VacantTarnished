import { Injectable } from '@angular/core';


const morseCode: {[key: string]: string} = {
  'A': '.-' ,
  'B': '-...' ,
  'C': '-.-.' ,
  'D': '-..' ,
  'E': '.' ,
  'F': '..-.' ,
  'G': '--.' ,
  'H': '....' ,
  'I': '..' ,
  'J': '.---' ,
  'K': '-.-' ,
  'L': '.-..' ,
  'M': '--' ,
  'N': '-.' ,
  'O': '---' ,
  'P': '.--.' ,
  'Q': '--.-' ,
  'R': '.-.' ,
  'S': '...' ,
  'T': '-' ,
  'U': '..-' ,
  'V': '...-' ,
  'W': '.--' ,
  'X': '-..-' ,
  'Y': '-.--' ,
  'Z': '--..' ,
};

@Injectable({
  providedIn: 'root'
})
export class EncodeService {

  constructor() { }


  toEncode: (string | undefined) = '';
  encoded: string = '';

  public encode(): void {
    this.encoded = '';
    if (this.toEncode === undefined) {
      return;
    }

    const words = this.toEncode.trim().split(' ');

    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        this.encoded += morseCode[words[i][j]];

        if (j !== words[i].length - 1) {
          this.encoded += ' ';
        }
      }

      if (i !== words.length - 1) {
        this.encoded += ' / ';
      }
    }
  }

  public invalidText(): boolean {

    if (this.toEncode === undefined || this.toEncode === '') {
      return true;
    }

    for (let i = 0; i < this.toEncode!.split(' ').length; i++) {
      for (let j = 0; j < this.toEncode!.split(' ')[i].length; j++) {
        const element = this.toEncode!.split(' ')[i][j];
        if (((element.toLowerCase() === element.toUpperCase()) || (element.toLowerCase() === element)) && (element != ' ')) {
          return true;
        }
      }
    }

    return false;
  }
}
