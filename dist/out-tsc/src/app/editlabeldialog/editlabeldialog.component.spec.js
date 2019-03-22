import { async, TestBed } from '@angular/core/testing';
import { EditlabeldialogComponent } from './editlabeldialog.component';
describe('EditlabeldialogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditlabeldialogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditlabeldialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=editlabeldialog.component.spec.js.map