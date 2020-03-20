import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { UserComponent } from './pages/user/user.component';


const appRoutes: Routes = [

  { path: '', redirectTo: '/watchlist', pathMatch: 'full' }

  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
