import { TestBed } from '@angular/core/testing';

import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  let service: EncodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encode a single word', () => {
    service.toEncode = 'PACHYRHINOSAURUS';
    service.encode();
    expect(service.encoded).toEqual('.--. .- -.-. .... -.-- .-. .... .. -. --- ... .- ..- .-. ..- ...');
  });

  it('should encode multiple words', () => {
    service.toEncode = 'PACHYRHINOSAURUS IS SUCH A INTERESTING DINOSAUR';
    service.encode();
    expect(service.encoded).toEqual('.--. .- -.-. .... -.-- .-. .... .. -. --- ... .- ..- .-. ..- ... / .. ... / ... ..- -.-. .... / .- / .. -. - . .-. . ... - .. -. --. / -.. .. -. --- ... .- ..- .-.');
  });
});
