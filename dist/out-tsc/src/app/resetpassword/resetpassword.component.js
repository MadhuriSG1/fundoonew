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
import { Router, ActivatedRoute } from '@angular/router';
var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(snackBar, userservice, router, activedRoute) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        this.activedRoute = activedRoute;
        this.token = activedRoute.snapshot.params['token'];
        userservice.resetPassword(this.token).subscribe(function (data) {
            if (data.statusCode == 200) {
                _this.snackBar.open('Check Your Email For ResetPage', 'Reset', {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open(data.statusMessage, 'Not Verified', {
                    duration: 2000,
                });
            }
        });
    }
    ResetpasswordComponent = __decorate([
        Component({
            selector: 'app-resetpassword',
            templateUrl: './resetpassword.component.html',
            styleUrls: ['./resetpassword.component.css']
        }),
        __metadata("design:paramtypes", [MatSnackBar, UserService, Router, ActivatedRoute])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());
export { ResetpasswordComponent };
//# sourceMappingURL=resetpassword.component.js.map