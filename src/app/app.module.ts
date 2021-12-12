import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { MenuComponent } from './menu/menu/menu.component';
import { PackpromoComponent } from './accueil/packpromo/packpromo.component';
import { SelectedPackComponent } from './accueil/selected-pack/selected-pack.component';
import { SearchPacksComponent } from './accueil/search-packs/search-packs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackDetailsComponent } from './accueil/pack-details/pack-details.component';
import { AllPacksComponent } from './accueil/all-packs/all-packs.component';
import { AdminAuthComponent } from './accueil/admin-auth/admin-auth.component';
import { AdminUIComponent } from './accueil/admin-ui/admin-ui.component';
import { AddPackComponent } from './accueil/add-pack/add-pack.component';
import { AboutUsComponent } from './accueil/about-us/about-us.component';
import { EditPackComponent } from './accueil/edit-pack/edit-pack.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PackpromoComponent,
    SelectedPackComponent,
    SearchPacksComponent,
    PackDetailsComponent,
    AllPacksComponent,
    AdminAuthComponent,
    AdminUIComponent,
    AddPackComponent,
    AboutUsComponent,
    EditPackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
