import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] },
  { path: 'media', loadChildren: './media/media.module#MediaPageModule', canActivate: [AuthGuard] },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule',canActivate: [AuthGuard] },
  { path: 'pdf', loadChildren: './pdf/pdf.module#PdfPageModule', canActivate: [AuthGuard] },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule', }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
