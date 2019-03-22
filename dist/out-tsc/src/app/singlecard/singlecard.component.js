var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { TotalNote } from '../Model/totalnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { UpdatecardsService } from '../service/updatecards.service';
import { ColabdialogComponent } from '../colabdialog/colabdialog.component';
import { FormControl } from '@angular/forms';
var SinglecardComponent = /** @class */ (function () {
    function SinglecardComponent(notecrudservice, snackBar, dialog, updatecardservice) {
        this.notecrudservice = notecrudservice;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.updatecardservice = updatecardservice;
        this.dateTime = new FormControl;
        this.imageget = true;
        this.colors = [["white", "salmon", "orange", "yellow"], ["green", "teal", "blue", "CadetBlue"],
            ["Peru", "turquoise", "olive", "gray"]];
    }
    SinglecardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.notedetails.note.reminder !== null) {
            this.d = new Date(this.notedetails.note.reminder);
        }
        this.notecrudservice.getAllLabels().subscribe(function (response) {
            _this.labelsall = response;
        });
    };
    SinglecardComponent.prototype.noteDelete = function () {
        var _this = this;
        this.notecrudservice.deleteNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
                _this.updatecardservice.changemessage2();
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(MydialogComponent, {
            width: '500px',
            data: { notedetails: this.notedetails.note }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.notedetails.note = result;
            console.log(_this.notedetails.note);
            _this.notecrudservice.updateNote(_this.notedetails.note).subscribe(function (response) {
                if (response.statusCode == 200) {
                    _this.snackBar.open(response.statusMessage, "", {
                        duration: 2000,
                    });
                }
                _this.updatecardservice.changemessage2();
            }, function (error) {
                console.log("Error", error);
            });
        });
    };
    SinglecardComponent.prototype.openColabDialog = function () {
        var dialogRef = this.dialog.open(ColabdialogComponent, {
            width: '500px',
            data: { notedetails: this.notedetails }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SinglecardComponent.prototype.changeColor = function (single) {
        var _this = this;
        this.notedetails.note.color = single;
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
            }
            _this.updatecardservice.changemessage('false', 'false');
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.haveThisLabel = function (label, note) {
        var _this = this;
        this.notecrudservice.addLabelToNote(note.noteid, label.labelId).subscribe(function (response) {
            console.log(response);
            _this.updatecardservice.changemessage2();
        });
    };
    SinglecardComponent.prototype.removeThisLabel = function (label, note) {
        var _this = this;
        console.log('Removed label from note');
        this.notecrudservice.removelabelfromnote(note.noteid, label.labelId).subscribe(function (response) {
            _this.updatecardservice.changemessage2();
        });
    };
    SinglecardComponent.prototype.trashnote = function () {
        var _this = this;
        this.notedetails.note.isTrash = true;
        //this.notedetails.isPin=false;
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
            }
            _this.updatecardservice.changemessage2();
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.restore = function () {
        var _this = this;
        this.notedetails.note.isTrash = false;
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
            }
            _this.updatecardservice.changemessage2();
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.pinned = function () {
        var _this = this;
        this.notedetails.note.isPin = !this.notedetails.note.isPin;
        if (this.notedetails.note.isPin) {
            this.notedetails.note.isArchive = false;
        }
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
            }
            _this.updatecardservice.changemessage2();
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.archivenote = function () {
        var _this = this;
        this.notedetails.note.isArchive = !this.notedetails.note.isArchive;
        if (this.notedetails.note.isArchive) {
            this.notedetails.note.isPin = false;
        }
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.snackBar.open(response.statusMessage, "", {
                    duration: 2000,
                });
                _this.updatecardservice.changemessage2();
            }
        }, function (error) {
            console.log("Error", error);
        });
    };
    SinglecardComponent.prototype.SetRemainder = function (event) {
        console.log("event " + event);
        var date = new Date(event.value);
        console.log(date);
        this.notedetails.note.reminder = date;
        this.d = new Date(this.notedetails.note.reminder);
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            console.log(response);
        });
    };
    SinglecardComponent.prototype.removeRemainder = function () {
        this.notedetails.note.reminder = null;
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            console.log(response);
        });
    };
    SinglecardComponent.prototype.setLaterToday = function () {
        var today = new Date();
        //let time=today.toLocaleTimeString();
        today.setHours(20, 0, 0);
        var date = new Date(today);
        this.notedetails.note.reminder = date;
        // let date=2011-12-03T10:15:30'
        this.d = new Date(this.notedetails.note.reminder);
        console.log("ddddddddddd " + this.d);
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            console.log(response);
        });
    };
    SinglecardComponent.prototype.setTomorrow = function () {
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setHours(20, 0, 0);
        tomorrow.setDate(today.getDate() + 1);
        var date = new Date(tomorrow);
        this.notedetails.note.reminder = date;
        this.d = new Date(this.notedetails.note.reminder);
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            console.log(response);
        });
    };
    SinglecardComponent.prototype.setNextWeek = function () {
        var today = new Date();
        var day = today.getDay(), diff = today.getDate() + 7 - day + (day == 0 ? -6 : 1);
        today.setHours(20, 0, 0);
        today.setDate(diff);
        this.notedetails.note.reminder = today;
        this.d = new Date(this.notedetails.note.reminder);
        this.notecrudservice.updateNote(this.notedetails.note).subscribe(function (response) {
            console.log(response);
        });
    };
    SinglecardComponent.prototype.method = function () {
        console.log('sdf');
    };
    __decorate([
        Input(),
        __metadata("design:type", TotalNote)
    ], SinglecardComponent.prototype, "notedetails", void 0);
    SinglecardComponent = __decorate([
        Component({
            selector: 'app-singlecard',
            templateUrl: './singlecard.component.html',
            styleUrls: ['./singlecard.component.css']
        }),
        __metadata("design:paramtypes", [NotecrudService,
            MatSnackBar, MatDialog, UpdatecardsService])
    ], SinglecardComponent);
    return SinglecardComponent;
}());
export { SinglecardComponent };
//# sourceMappingURL=singlecard.component.js.map