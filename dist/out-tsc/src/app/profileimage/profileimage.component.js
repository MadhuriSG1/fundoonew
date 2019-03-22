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
import { MatDialogRef } from '@angular/material';
var ProfileimageComponent = /** @class */ (function () {
    function ProfileimageComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    ProfileimageComponent.prototype.ngOnInit = function () { };
    ProfileimageComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    ProfileimageComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
    };
    ProfileimageComponent.prototype.selectProfileImage = function () {
        if (this.croppedImage != null) {
            this.dialogRef.close(this.croppedImage);
        }
    };
    ProfileimageComponent = __decorate([
        Component({
            selector: 'app-profileimage',
            templateUrl: './profileimage.component.html',
            styleUrls: ['./profileimage.component.css']
        }),
        __metadata("design:paramtypes", [MatDialogRef])
    ], ProfileimageComponent);
    return ProfileimageComponent;
}());
export { ProfileimageComponent };
//# sourceMappingURL=profileimage.component.js.map