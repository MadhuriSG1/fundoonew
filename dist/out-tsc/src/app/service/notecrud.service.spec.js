import { TestBed, inject } from '@angular/core/testing';
import { NotecrudService } from './notecrud.service';
describe('NotecrudService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [NotecrudService]
        });
    });
    it('should be created', inject([NotecrudService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=notecrud.service.spec.js.map