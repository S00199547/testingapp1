import { greet } from "./greet";

describe('greet Mah Noor S00199547',() =>
{
    it('it should include the name in the message',()=>{
        expect(greet('Mah Noor')).toContain('Mah Noor');
    })
})