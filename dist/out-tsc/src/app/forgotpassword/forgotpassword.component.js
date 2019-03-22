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
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(matsnackbar, userService) {
        this.matsnackbar = matsnackbar;
        this.userService = userService;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.onResetSubmit = function () {
        var _this = this;
        this.userService.forgotPassword(this.email).subscribe(function (data) {
            if (data.statusCode == 200) {
                _this.matsnackbar.open('A Reset Link Is Send To Your Email Address', '', {
                    duration: 2000,
                });
            }
            else {
                _this.matsnackbar.open(data.statusMessage, "", {
                    duration: 2000,
                });
            }
        });
    };
    ForgotpasswordComponent = __decorate([
        Component({
            selector: 'app-forgotpassword',
            templateUrl: './forgotpassword.component.html',
            styleUrls: ['./forgotpassword.component.css']
        }),
        __metadata("design:paramtypes", [MatSnackBar, UserService])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());
export { ForgotpasswordComponent };
//# sourceMappingURL=forgotpassword.component.js.map