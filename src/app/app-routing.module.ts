import { Component, NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AddArtworkComponent } from "./components/add-artwork/add-artwork.component";
import { ListComponent } from "./components/admin/list/list.component";
import { DetailsComponent } from "./components/details/details.component";
import { HomeComponent } from "./components/home/home.component"
import { Page404Component } from "./components/page404/page404.component";
import { LoginComponent } from "./components/user/login/login.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { RegisterComponent } from "./components/user/register/register.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'artwork/:id', component: DetailsComponent},
    {path: 'admin/list', component: ListComponent},//TODO: only authentication
    {path: 'user/login', component: LoginComponent},
    {path: 'user/register', component: RegisterComponent},
    {path: 'user/profile', component: ProfileComponent},//TODO: only authentication
    {path: "add", component: AddArtworkComponent},
    {path: '**', component: Page404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}