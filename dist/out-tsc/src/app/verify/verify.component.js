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
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(userService, matsnackbar, router, activatedrouter) {
        var _this = this;
        this.userService = userService;
        this.matsnackbar = matsnackbar;
        this.router = router;
        this.activatedrouter = activatedrouter;
        this.token = activatedrouter.snapshot.params['token'];
        console.log(this.token);
        userService.verifyUser(this.token)
            .subscribe(function (data) {
            if (data.value == 200) {
                _this.matsnackbar.open("Verify User Successfully ,", "Verify", {
                    duration: 2000,
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.matsnackbar.open("User Not Verified");
            }
        });
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent = __decorate([
        Component({
            selector: 'app-verify',
            templateUrl: './verify.component.html',
            styleUrls: ['./verify.component.css']
        }),
        __metadata("design:paramtypes", [UserService, MatSnackBar,
            Router, ActivatedRoute])
    ], VerifyComponent);
    return VerifyComponent;
}());
export { VerifyComponent };
//# sourceMappingURL=verify.component.js.map