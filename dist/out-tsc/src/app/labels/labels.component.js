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
import { Router, ActivatedRoute } from '@angular/router';
import { ViewchangeService } from '../service/viewchange.service';
var LabelsComponent = /** @class */ (function () {
    function LabelsComponent(updatecardservice, router, activeRoute, viewchangeService) {
        this.updatecardservice = updatecardservice;
        this.router = router;
        this.activeRoute = activeRoute;
        this.viewchangeService = viewchangeService;
    }
    LabelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.labelvalue = this.activeRoute.snapshot.params['labelvalue'];
        this.updatecardservice.currentnotes.subscribe(function (udnotes) {
            _this.allnotes = udnotes;
        });
        this.viewchangeService.currentView.subscribe(function (view) {
            return _this.currentView = view;
        });
        //This Is will Update filter (labelvalue ) over child route
        this.router.events.subscribe(function (e) {
            _this.labelvalue = _this.activeRoute.snapshot.params['labelvalue'];
        });
    };
    LabelsComponent.prototype.labelcheck = function (label) {
        if (label.labelTitle == this.labelvalue) {
            return true;
        }
        else {
            return false;
        }
    };
    LabelsComponent = __decorate([
        Component({
            selector: 'app-labels',
            templateUrl: './labels.component.html',
            styleUrls: ['./labels.component.css']
        }),
        __metadata("design:paramtypes", [UpdatecardsService, Router,
            ActivatedRoute, ViewchangeService])
    ], LabelsComponent);
    return LabelsComponent;
}());
export { LabelsComponent };
//# sourceMappingURL=labels.component.js.map