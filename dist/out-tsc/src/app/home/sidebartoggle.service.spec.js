import { TestBed, inject } from '@angular/core/testing';
import { SidebartoggleService } from './sidebartoggle.service';
describe('SidebartoggleService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SidebartoggleService]
        });
    });
    it('should be created', inject([SidebartoggleService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sidebartoggle.service.spec.js.map