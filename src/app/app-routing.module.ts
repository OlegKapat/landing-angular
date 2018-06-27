import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutfounderComponent} from '././nextmaterial/aboutfounder/aboutfounder.component';
import {FooterComponent} from '././nextmaterial/footer/footer.component';

const routes: Routes = [
     {path: '', redirectTo: 'app-root', pathMatch: 'full'},
        {path: 'app-aboutfounder', component: AboutfounderComponent},
        {path: 'app-footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
