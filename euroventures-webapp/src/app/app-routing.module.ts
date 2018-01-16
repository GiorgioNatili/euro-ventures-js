import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamPageModule } from './team-page/team-page.module';
import { WhoWeArePageModule } from './who-we-are-page/who-we-are-page.module';
import { HomePageModule } from './home-page/home-page.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { HomePageLayoutComponent } from './home-page/home-page-layout/home-page-layout.component';
import { PortfolioPageLayoutComponent } from './portfolio-page/portfolio-page-layout/portfolio-page-layout.component';
import { TeamPageLayoutComponent } from './team-page/team-page-layout/team-page-layout.component';
import { WhoWeArePageLayoutComponent } from './who-we-are-page/who-we-are-page-layout/who-we-are-page-layout.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageLayoutComponent },
    { path: 'our-team', component: TeamPageLayoutComponent },
    { path: 'meet-our-startups', component: PortfolioPageLayoutComponent },
    { path: 'who-we-are', component: WhoWeArePageLayoutComponent },
    // {
    //     path: 'crisis-center',
    //     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    //     data: { preload: true }
    // },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategy,

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
