var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { UpdatecardsService } from '../service/updatecards.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { NotecrudService } from '../service/notecrud.service';
import { ViewchangeService } from '../service/viewchange.service';
import { TotalNote } from '../Model/totalnote.model';
var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(updatecardsService, snackBar, dialog, updatecardservice, notecrudservice, viewchangeService) {
        this.updatecardsService = updatecardsService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.updatecardservice = updatecardservice;
        this.notecrudservice = notecrudservice;
        this.viewchangeService = viewchangeService;
        this.updatecardsService.changemessage('false', 'true');
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updatecardsService.currentnotes.subscribe(function (updatenotes) {
            return _this.allnotes = updatenotes;
        });
        this.viewchangeService.currentView.subscribe(function (view) {
            _this.currentView = view;
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", TotalNote)
    ], ArchiveComponent.prototype, "notedetails", void 0);
    ArchiveComponent = __decorate([
        Component({
            selector: 'app-archive',
            templateUrl: './archive.component.html',
            styleUrls: ['./archive.component.css']
        }),
        __metadata("design:paramtypes", [UpdatecardsService,
            MatSnackBar, MatDialog, UpdatecardsService,
            NotecrudService, ViewchangeService])
    ], ArchiveComponent);
    return ArchiveComponent;
}());
export { ArchiveComponent };
//# sourceMappingURL=archive.component.js.map