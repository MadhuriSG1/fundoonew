import { TestBed, inject } from '@angular/core/testing';
import { UpdatecardsService } from './updatecards.service';
describe('UpdatecardsService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [UpdatecardsService]
        });
    });
    it('should be created', inject([UpdatecardsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=updatecards.service.spec.js.map