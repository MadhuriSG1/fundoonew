var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
var httpOptions2 = {
    headers: new HttpHeaders({
        'token': localStorage.getItem('Authorization')
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/user/';
    }
    UserService.prototype.registerUser = function (user) {
        return this.http.post(this.url + 'register', user);
    };
    UserService.prototype.loginUser = function (loginuser) {
        return this.http.post(this.url + 'login', loginuser, { observe: "response" });
    };
    UserService.prototype.verifyUser = function (token) {
        return this.http.get(this.url + 'verify' + token);
    };
    UserService.prototype.forgotPassword = function (email) {
        return this.http.get(this.url + 'forgotpassword/?email=' + email);
    };
    UserService.prototype.resetPassword = function (token) {
        return this.http.get(this.url + 'resetpassword/' + token);
    };
    UserService.prototype.resetLink = function (loginmodel, token) {
        return this.http.post(this.url + 'resetpage/' + token, loginmodel);
    };
    UserService.prototype.getCollaboratorUserId = function (email) {
        return this.http.get(this.url + 'collabpersonid?email=' + email, httpOptions2);
    };
    UserService.prototype.uploadProfileImage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        return this.http.post(this.url + "uploadimage", formdata, httpOptions2);
    };
    UserService.prototype.getProfileImage = function () {
        return this.http.get(this.url + "getprofileimage", httpOptions2);
    };
    UserService.prototype.getUserDetails = function () {
        return this.http.get(this.url + "getuserdetails", httpOptions2);
    };
    UserService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map