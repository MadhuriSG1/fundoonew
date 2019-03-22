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
        'token': localStorage.getItem('Authorization')
    })
};
var httpOptions2 = {
    headers: new HttpHeaders({
        'token': localStorage.getItem('Authorization')
    })
};
var NotecrudService = /** @class */ (function () {
    function NotecrudService(http) {
        this.http = http;
        this.noteUrl = 'http://localhost:8888/api/note';
        this.labelUrl = 'http://localhost:8888/api/label';
        this.collaboratorUrl = 'http://localhost:8888/api/collaborator';
    }
    //For sending data to the server
    NotecrudService.prototype.createNote = function (newNote) {
        console.log(newNote);
        console.log("Token=" + localStorage.getItem('Authorization'));
        return this.http.post(this.noteUrl, newNote, httpOptions);
    };
    NotecrudService.prototype.getNotes = function (isTrash, isArchive) {
        return this.http.get(this.noteUrl + '?isTrash=' + isTrash + '&isArchive=' + isArchive, httpOptions2);
    };
    NotecrudService.prototype.deleteNote = function (newNote) {
        console.log(newNote);
        console.log(localStorage.getItem('Authorization'));
        return this.http.post(this.noteUrl + '/deletenote', newNote, httpOptions);
    };
    NotecrudService.prototype.updateNote = function (updateNode) {
        return this.http.post(this.noteUrl + '/updatenote', updateNode, httpOptions);
    };
    NotecrudService.prototype.createLabel = function (newLabel) {
        return this.http.post(this.labelUrl, newLabel, httpOptions);
    };
    NotecrudService.prototype.getAllLabels = function () {
        return this.http.get(this.labelUrl, httpOptions2);
    };
    NotecrudService.prototype.updateLabel = function (updateLabel) {
        return this.http.put(this.labelUrl, updateLabel, httpOptions);
    };
    NotecrudService.prototype.addLabelToNote = function (noteid, labelId) {
        return this.http.post(this.labelUrl + '/addlabeltonote?noteid=' + noteid + '&labelId=' + labelId, httpOptions2);
    };
    NotecrudService.prototype.removelabelfromnote = function (noteid, labelId) {
        return this.http.post(this.labelUrl + '/removelabelfromnote?noteid=' + noteid + '&labelId=' + labelId, httpOptions2);
    };
    NotecrudService.prototype.deleteLabel = function (deleteLabel) {
        return this.http.post(this.labelUrl + '/deletelabel', deleteLabel, httpOptions);
    };
    NotecrudService.prototype.addCollaborator = function (sharedUserId, sharedNoteId) {
        return this.http.post(this.collaboratorUrl + "?sharedUserID=" + sharedUserId + "&sharedNoteId=" + sharedNoteId, null, httpOptions2);
    };
    NotecrudService.prototype.deleteCollaborator = function (sharedUserId, sharedNoteId) {
        return this.http.delete(this.collaboratorUrl + "?sharedUserID=" + sharedUserId + "&sharedNoteId=" + sharedNoteId, httpOptions2);
    };
    NotecrudService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], NotecrudService);
    return NotecrudService;
}());
export { NotecrudService };
//# sourceMappingURL=notecrud.service.js.map