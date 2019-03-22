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
var UpdatelabelsService = /** @class */ (function () {
    function UpdatelabelsService(notecrud) {
        var _this = this;
        this.notecrud = notecrud;
        this.allLabels = new BehaviorSubject([]);
        this.currentlabels = this.allLabels.asObservable();
        this.notecrud.getAllLabels().subscribe(function (response) {
            _this.allLabels.next(response);
        }, function (error) {
            console.log(error);
        });
    }
    UpdatelabelsService.prototype.changemessagelabel = function () {
        var _this = this;
        this.notecrud.getAllLabels().subscribe(function (response) {
            _this.allLabels.next(response);
        }, function (error) {
            console.log(error);
        });
    };
    UpdatelabelsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NotecrudService])
    ], UpdatelabelsService);
    return UpdatelabelsService;
}());
export { UpdatelabelsService };
//# sourceMappingURL=updatelabels.service.js.map