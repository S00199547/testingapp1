import { getcurrencies } from "./getcurrencies";

describe('getcurrencies',()=>{
    it('should return the supported currencies USD GDP EUR',() =>{
        const result = getcurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('GDP');
        expect(result).toContain('EUR');

    });
   
});
