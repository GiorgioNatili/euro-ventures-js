import { HomePageModule } from './home-page/home-page.module';
import { TeamPageModule } from './team-page/team-page.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';
import { WhoWeArePageModule } from './who-we-are-page/who-we-are-page.module';

export const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageModule },
    { path: 'our-team', component: TeamPageModule },
    { path: 'meet-our-startups', component: PortfolioPageModule },
    { path: 'who-we-are', component: WhoWeArePageModule },
];
