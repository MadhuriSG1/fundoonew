import { TestBed, inject } from '@angular/core/testing';
import { ViewchangeService } from './viewchange.service';
describe('ViewchangeService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [ViewchangeService]
        });
    });
    it('should be created', inject([ViewchangeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=viewchange.service.spec.js.map