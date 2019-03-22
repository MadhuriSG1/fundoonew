var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NotecrudService } from './notecrud.service';
import { BehaviorSubject } from 'rxjs';
var UpdatecardsService = /** @class */ (function () {
    function UpdatecardsService(notecrud) {
        var _this = this;
        this.notecrud = notecrud;
        this.allNotes = new BehaviorSubject([]);
        this.currentnotes = this.allNotes.asObservable();
        this.isTrash = 'false';
        this.isArchive = 'false';
        this.notecrud.getNotes(this.isTrash, this.isArchive).subscribe(function (response) {
            console.log(response);
            _this.allNotes.next(response);
        }, function (error) {
            console.log(error);
        });
    }
    UpdatecardsService.prototype.ngOnInit = function () {
    };
    UpdatecardsService.prototype.changemessage = function (isTrash, isArchive) {
        var _this = this;
        this.isTrash = isTrash;
        this.isArchive = isArchive;
        this.notecrud.getNotes(isTrash, isArchive).subscribe(function (response) {
            _this.allNotes.next(response);
        }, function (error) {
            console.log(error);
        });
    };
    UpdatecardsService.prototype.changemessage2 = function () {
        var _this = this;
        this.notecrud.getNotes(this.isTrash, this.isArchive).subscribe(function (response) {
            _this.allNotes.next(response);
        }, function (error) {
            console.log(error);
        });
    };
    UpdatecardsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NotecrudService])
    ], UpdatecardsService);
    return UpdatecardsService;
}());
export { UpdatecardsService };
//# sourceMappingURL=updatecards.service.js.map