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
import { RegisterUser } from '../Model/register.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
var ResetpageComponent = /** @class */ (function () {
    function ResetpageComponent(formBuilder, userService, matSnackbar, router, activatedRouter) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.matSnackbar = matSnackbar;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.user = new RegisterUser();
        this.token = activatedRouter.snapshot.params['token'];
    }
    ResetpageComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            'email': [this.user.email, [
                    Validators.required,
                    Validators.minLength(8)
                ]],
            'password': [this.user.password, [
                    Validators.required,
                    Validators.minLength(8)
                ]]
        });
    };
    ResetpageComponent.prototype.onResetPageClick = function () {
        var _this = this;
        this.userService.resetLink(this.user, this.token).subscribe(function (data) {
            if (data.statusCode == 200) {
                _this.matSnackbar.open('Password Changed Successfully ', 'LogIn', {
                    duration: 2000,
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.matSnackbar.open(data.statusMessage, "Password Reset Fails", {
                    duration: 2000,
                });
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    ResetpageComponent = __decorate([
        Component({
            selector: 'app-resetpage',
            templateUrl: './resetpage.component.html',
            styleUrls: ['./resetpage.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, UserService,
            MatSnackBar, Router, ActivatedRoute])
    ], ResetpageComponent);
    return ResetpageComponent;
}());
export { ResetpageComponent };
//# sourceMappingURL=resetpage.component.js.map