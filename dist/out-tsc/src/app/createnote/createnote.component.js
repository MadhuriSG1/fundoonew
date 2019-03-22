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
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { MatSnackBar } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { TotalNote } from '../Model/totalnote.model';
var CreatenoteComponent = /** @class */ (function () {
    function CreatenoteComponent(notecrudservice, snackBar, updatecardsService) {
        this.notecrudservice = notecrudservice;
        this.snackBar = snackBar;
        this.updatecardsService = updatecardsService;
        this.navshow = false;
        this.myColor = "white";
        this.createnote = new CreateNoteModel;
        this.colors = [["white", "salmon", "orange", "yellow"], ["green", "teal", "blue", "CadetBlue"],
            ["Peru", "turquoise", "olive", "gray"]];
    }
    CreatenoteComponent.prototype.ngOnInit = function () {
    };
    CreatenoteComponent.prototype.fullCardShow = function () {
        this.navshow = !this.navshow;
    };
    CreatenoteComponent.prototype.changeColor = function (single) {
        this.createnote.color = single;
        this.myColor = single;
    };
    CreatenoteComponent.prototype.noteSave = function () {
        var _this = this;
        this.navshow = !this.navshow;
        this.createnote.isPin = false;
        // this.createnote.userid=20;
        this.notecrudservice.createNote(this.createnote).subscribe(function (response) {
            console.log(response);
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
                _this.updatecardsService.changemessage2();
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", TotalNote)
    ], CreatenoteComponent.prototype, "notedetails", void 0);
    CreatenoteComponent = __decorate([
        Component({
            selector: 'app-createnote',
            templateUrl: './createnote.component.html',
            styleUrls: ['./createnote.component.css']
        }),
        __metadata("design:paramtypes", [NotecrudService, MatSnackBar,
            UpdatecardsService])
    ], CreatenoteComponent);
    return CreatenoteComponent;
}());
export { CreatenoteComponent };
//# sourceMappingURL=createnote.component.js.map