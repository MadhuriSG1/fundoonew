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
import { UpdatelabelsService } from '../service/updatelabels.service';
import { ViewchangeService } from '../service/viewchange.service';
var NotesComponent = /** @class */ (function () {
    function NotesComponent(updatecardservice, updatelabelsService, viewchangeservice) {
        this.updatecardservice = updatecardservice;
        this.updatelabelsService = updatelabelsService;
        this.viewchangeservice = viewchangeservice;
        this.isPin = 'false';
        this.showtoolbar = false;
        this.updatecardservice.changemessage('false', 'false');
        this.updatelabelsService.changemessagelabel();
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updatecardservice.currentnotes.subscribe(function (message) { return _this.allnotes = message; });
        this.updatelabelsService.currentlabels.subscribe(function (labels) { return _this.alllabels = labels; });
        this.viewchangeservice.currentView.subscribe(function (view) {
            _this.currentView = view;
        });
    };
    NotesComponent = __decorate([
        Component({
            selector: 'app-notes',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.css']
        }),
        __metadata("design:paramtypes", [UpdatecardsService, UpdatelabelsService,
            ViewchangeService])
    ], NotesComponent);
    return NotesComponent;
}());
export { NotesComponent };
//# sourceMappingURL=notes.component.js.map