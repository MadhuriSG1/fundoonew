var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotesComponent } from './notes/notes.component';
import { LabelsComponent } from './labels/labels.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
var routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'verify/:token', component: VerifyComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
    { path: 'resetpassword/:token', component: ResetpasswordComponent },
    { path: 'resetpage/:token', component: ResetpageComponent },
    { path: 'createnote', component: CreatenoteComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'note', pathMatch: 'full' },
            { path: 'note', component: NotesComponent },
            { path: 'archive', component: ArchiveComponent },
            { path: 'trash', component: TrashComponent },
            { path: 'labels/:labelvalue', component: LabelsComponent, runGuardsAndResolvers: 'paramsChange', }
        ]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map