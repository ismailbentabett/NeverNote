import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('../settingsTab/settings-tab.module').then(m => m.SettingsTabModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../accountTab/account-tab.module').then(m => m.AccountTabModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../homeTab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
