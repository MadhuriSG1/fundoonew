var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotecrudService } from '../service/notecrud.service';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { UserDetails } from '../Model/userdetails.model';
var ColabdialogComponent = /** @class */ (function () {
    function ColabdialogComponent(dialogRef, noteCurdService, data, userService, snackBar, updatecardservice) {
        this.dialogRef = dialogRef;
        this.noteCurdService = noteCurdService;
        this.data = data;
        this.userService = userService;
        this.snackBar = snackBar;
        this.updatecardservice = updatecardservice;
        this.userDetails = new UserDetails();
    }
    ColabdialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserDetails().subscribe(function (response) {
            console.log(response);
            _this.userDetails = response;
        });
    };
    ColabdialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ColabdialogComponent.prototype.addCollaborator = function () {
        var _this = this;
        this.dialogRef.close();
        this.userService.getCollaboratorUserId(this.email).subscribe(function (response) {
            console.log(response);
            if (response > 0) {
                _this.noteCurdService.addCollaborator(response, _this.data.notedetails.note.noteid).subscribe(function (response) {
                    console.log(response);
                    if (response) {
                        console.log(response);
                        _this.snackBar.open(response.statusMessage, "", {
                            duration: 2000,
                        });
                        _this.updatecardservice.changemessage2();
                    }
                    if (response == -1) {
                        _this.snackBar.open("Entered Invalid Email", "", {
                            duration: 2000,
                        });
                    }
                });
            }
        });
    };
    ColabdialogComponent.prototype.cancelCollaborator = function (email) {
        var _this = this;
        this.userService.getCollaboratorUserId(email).subscribe(function (response) {
            console.log("responsesfdsgfdg =" + response);
            if (response > 0) {
                _this.noteCurdService.deleteCollaborator(response, _this.data.notedetails.note.noteid).subscribe(function (response) {
                    _this.snackBar.open(response.statusMessage, "", {
                        duration: 2000,
                    });
                    _this.updatecardservice.changemessage2();
                });
            }
        });
    };
    ColabdialogComponent = __decorate([
        Component({
            selector: 'app-colabdialog',
            templateUrl: './colabdialog.component.html',
            styleUrls: ['./colabdialog.component.css']
        }),
        __param(2, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef,
            NotecrudService, Object, UserService, MatSnackBar, UpdatecardsService])
    ], ColabdialogComponent);
    return ColabdialogComponent;
}());
export { ColabdialogComponent };
//# sourceMappingURL=colabdialog.component.js.map