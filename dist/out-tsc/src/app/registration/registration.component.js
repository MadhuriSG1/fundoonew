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
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { RegisterUser } from '../Model/register.model';
import { MatSnackBar } from '@angular/material';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, userService, matsnackbar, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.matsnackbar = matsnackbar;
        this.router = router;
        this.user = new RegisterUser();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'name': [this.user.name, [Validators.required]],
            'email': [this.user.email, [Validators.required]],
            'password': [this.user.password, [Validators.required, Validators.minLength(6)]],
            'mobileNumber': [this.user.mobileNumber, [Validators.required, Validators.maxLength(10)]]
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user.email);
        this.userService.registerUser(this.user).subscribe(function (data) {
            if (data.statusCode == 200) {
                _this.matsnackbar.open(' Register Successfully ,Please Confirm Your Email Address', 'LogIn', {
                    duration: 2000,
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.matsnackbar.open(data.statusMessage, "Register Fails");
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    RegistrationComponent = __decorate([
        Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, UserService,
            MatSnackBar, Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map