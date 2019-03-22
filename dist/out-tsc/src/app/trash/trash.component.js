var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UpdatecardsService } from '../service/updatecards.service';
import { ViewchangeService } from '../service/viewchange.service';
var TrashComponent = /** @class */ (function () {
    function TrashComponent(cradupdate, viewchangeService) {
        this.cradupdate = cradupdate;
        this.viewchangeService = viewchangeService;
        this.cradupdate.changemessage('true', 'false');
    }
    TrashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cradupdate.currentnotes.subscribe(function (updatenotes) {
            return _this.allnotes = updatenotes;
        });
        this.viewchangeService.currentView.subscribe(function (view) {
            _this.currentView = view;
        });
    };
    TrashComponent = __decorate([
        Component({
            selector: 'app-trash',
            templateUrl: './trash.component.html',
            styleUrls: ['./trash.component.css']
        }),
        __metadata("design:paramtypes", [UpdatecardsService, ViewchangeService])
    ], TrashComponent);
    return TrashComponent;
}());
export { TrashComponent };
//# sourceMappingURL=trash.component.js.map