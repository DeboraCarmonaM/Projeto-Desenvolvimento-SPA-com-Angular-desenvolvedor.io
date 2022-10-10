import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";

//constante com coleção de rotas
export const rootRouterConfig: Routes = [  
    { path: '', redirectTo: '/home', pathMatch: 'full'}, //path de redirecionamento para quando chamar vazio
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'feature-data-binding', component: DataBindingComponent}

];
