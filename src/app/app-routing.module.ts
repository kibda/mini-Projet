import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './accueil/about-us/about-us.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { AddPackComponent } from './accueil/add-pack/add-pack.component';
import { AdminAuthComponent } from './accueil/admin-auth/admin-auth.component';
import { AdminUIComponent } from './accueil/admin-ui/admin-ui.component';
import { AllPacksComponent } from './accueil/all-packs/all-packs.component';
import { EditPackComponent } from './accueil/edit-pack/edit-pack.component';
import { PackpromoComponent } from './accueil/packpromo/packpromo.component';
import { SearchPacksComponent } from './accueil/search-packs/search-packs.component';
import { SelectedPackComponent } from './accueil/selected-pack/selected-pack.component';

const routes: Routes = [
  { path:'accueil',component:AccueilComponent},
 
  { path:'accueil/:destin/:datedest',component:SearchPacksComponent},
  {path:'promo', component:PackpromoComponent},
  { path:'promo/:id',component:SelectedPackComponent},
  {path:'allPacks', component:AllPacksComponent},
  {path:'allPacks/:id', component:SelectedPackComponent},
  {path:'sPacks', component:SearchPacksComponent},
  {path:'sPacks/:id', component:SelectedPackComponent},
  {path:'adminAuth', component:AdminAuthComponent},
  {path:'adminP', component:AdminUIComponent},
  {path:'adminP/:id', component:SelectedPackComponent},
  {path:'addPack', component:AddPackComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'edit', component:EditPackComponent},
  {path:'edit/:id', component:EditPackComponent},


  { path:'',redirectTo:'accueil', pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
