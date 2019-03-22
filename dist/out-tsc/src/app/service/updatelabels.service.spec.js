import { TestBed, inject } from '@angular/core/testing';
import { UpdatelabelsService } from './updatelabels.service';
describe('UpdatelabelsService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [UpdatelabelsService]
        });
    });
    it('should be created', inject([UpdatelabelsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=updatelabels.service.spec.js.map