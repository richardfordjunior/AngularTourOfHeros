import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';



describe('HeroService', () => {
  let service: HeroService;;
  beforeEach(() => {
    service = new HeroService();
  });                                                                            

  it('#getHeros should return data', ()=>{
    let values = service.getHeros();
    expect(service.getHeros()).toBeDefined;
    expect(values[0].name).toEqual('Mr. Nice')
  })

});
