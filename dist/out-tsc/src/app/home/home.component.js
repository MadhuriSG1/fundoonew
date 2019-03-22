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
import { Label } from '../Model/label.model';
import { UserDetails } from '../Model/userdetails.model';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { ProfileimageComponent } from '../profileimage/profileimage.component';
import { NotecrudService } from '../service/notecrud.service';
import { MatDialog } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { MatSnackBar } from '@angular/material';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Router } from '@angular/router';
import { ViewchangeService } from '../service/viewchange.service';
import { UserService } from '../service/user.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(notecurdservice, userService, dialog, updatecardsService, matsnackbar, updatelabelsService, router, viewchangeservice) {
        this.notecurdservice = notecurdservice;
        this.userService = userService;
        this.dialog = dialog;
        this.updatecardsService = updatecardsService;
        this.matsnackbar = matsnackbar;
        this.updatelabelsService = updatelabelsService;
        this.router = router;
        this.viewchangeservice = viewchangeservice;
        this.userDetails = new UserDetails();
        this.label = new Label();
        this.profileImage = localStorage.getItem('Authorization');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notecurdservice.getAllLabels().subscribe(function (response) {
            _this.labelsall = response;
            console.log(response);
        });
        this.viewchangeservice.currentView.subscribe(function (response) {
            _this.show = response;
        });
        this.userService.getUserDetails().subscribe(function (response) {
            _this.userDetails = response;
        });
    };
    HomeComponent.prototype.childEventClicked = function (open) {
        this.clickedEvent = open;
    };
    HomeComponent.prototype.EditLabelDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(EditlabeldialogComponent, {
            width: '300px',
            height: '350px',
            data: { labelsall: this.labelsall }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.updatecardsService.changemessage2();
            _this.notecurdservice.getAllLabels().subscribe(function (response) {
                _this.labelsall = response;
            });
            if (result != null && result != "") {
                _this.label.labelTitle = result;
                _this.notecurdservice.createLabel(_this.label).subscribe(function (response) {
                    console.log(response);
                });
                _this.notecurdservice.getAllLabels().subscribe(function (response) {
                    _this.labelsall = response;
                });
                _this.updatelabelsService.changemessagelabel();
            }
            else {
                _this.notecurdservice.getAllLabels().subscribe(function (response) {
                    _this.labelsall = response;
                });
            }
        });
    };
    HomeComponent.prototype.ProfileSelectDialog = function () {
        var _this = this;
        var dialogRef2 = this.dialog.open(ProfileimageComponent, {
            width: '850px',
        });
        dialogRef2.afterClosed().subscribe(function (image) {
            if (image != null) {
                _this.userService.uploadProfileImage(image.file).subscribe(function (value) {
                    console.log(value);
                });
            }
        });
    };
    HomeComponent.prototype.changeView = function () {
        this.viewchangeservice.onViewChange();
        console.log(this.show);
    };
    HomeComponent.prototype.SignOut = function () {
        this.router.navigate(["/login"]);
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [NotecrudService, UserService, MatDialog,
            UpdatecardsService, MatSnackBar,
            UpdatelabelsService, Router, ViewchangeService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map