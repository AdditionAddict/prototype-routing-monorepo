import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./pages/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "dashboard",
    loadChildren: () => import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule),
  },
  {
    path: "pages/feature-one",
    loadChildren: () => import("../../../feature-one/src/app/pages/feature/feature.module").then(m => m.FeatureModule),
  },
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "**", redirectTo: "auth" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
