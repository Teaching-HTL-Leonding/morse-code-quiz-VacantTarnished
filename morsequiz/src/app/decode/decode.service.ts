import { Injectable } from '@angular/core';


const morseCode: {[key: string]: string} = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
};


@Injectable({
  providedIn: 'root'
})
export class DecodeService {

  toDecode: (string | undefined) = '';
  decoded: string = '';

  constructor() { }

  public decode(): void {
    if (this.toDecode === undefined) {
      return
    }

    const letters = this.toDecode.split(' ');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === '/') {
        letters[i] = ' ';
      } else {
        letters[i] = morseCode[letters[i]];
      }
    }

    this.decoded = letters.join('');
  }

  public invalidText(): boolean {
    if (this.toDecode === undefined || this.toDecode === '') {
      return true;
    }

    for (let i = 0; i < this.toDecode.length; i++) {
      if (this.toDecode[i] !== '/' && this.toDecode[i] !== '.' && this.toDecode[i] !== '-' && this.toDecode[i] !== ' ') {
        return true;
      }
    }

    return false;
  }
}
