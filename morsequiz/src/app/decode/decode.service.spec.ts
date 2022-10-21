import { TestBed } from '@angular/core/testing';

import { DecodeService } from './decode.service';

describe('DecodeService', () => {
  let service: DecodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should decode a single word', () => {
    service.toDecode = '.--. .- -.-. .... -.-- .-. .... .. -. --- ... .- ..- .-. ..- ...';
    service.decode();
    expect(service.decoded).toEqual('PACHYRHINOSAURUS');
  });

  it('should decode multiple words', () => {
    service.toDecode = '.--. .- -.-. .... -.-- .-. .... .. -. --- ... .- ..- .-. ..- ... / .. ... / ... ..- -.-. .... / .- / .. -. - . .-. . ... - .. -. --. / -.. .. -. --- ... .- ..- .-.';
    service.decode();
    expect(service.decoded).toEqual('PACHYRHINOSAURUS');
  });
});
