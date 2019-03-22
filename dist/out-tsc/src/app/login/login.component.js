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
import { Router } from '@angular/router';
import { LoginUser } from '../Model/login.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userService, matsnackbar, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.matsnackbar = matsnackbar;
        this.router = router;
        this.user = new LoginUser();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'email': [this.user.email, [Validators.required]],
            'password': [this.user.password, [Validators.required, Validators.minLength(6)]]
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.user.email);
        this.userService.loginUser(this.user).subscribe(function (data) {
            if (data.body.statusCode == 200) {
                _this.matsnackbar.open(' Login Successfully ', 'LogIn', {
                    duration: 2000,
                });
                console.log(data.headers);
                localStorage.setItem('Authorization', data.headers.get('Authorization'));
                _this.router.navigate(['./home']);
            }
            else {
                console.log(data);
                _this.matsnackbar.open(data.statusMessage, "Login Fails");
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    LoginComponent.prototype.navigateToRegistration = function () {
        this.router.navigate(["/register"]);
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
        }),
        __metadata("design:paramtypes", [FormBuilder, UserService,
            MatSnackBar, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map