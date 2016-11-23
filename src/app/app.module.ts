/* Módulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Componentes */
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { AddTipoComponent } from './addTipo/addTipo.component';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-BR'

/* LocalStorage */
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';


// Create config options (see ILocalStorageServiceConfigOptions) for deets:
let localStorageServiceConfig = {
  prefix: 'despesasapp',
  storageType: 'localStorage'
};


/* Serviços */
import { DespesaService } from './despesa.service';
import { TipoDespesaService } from './tipoDespesa.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    AddTipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgbModule.forRoot(),
    MomentModule
  ],
  providers: [DespesaService,
             TipoDespesaService,
            LocalStorageService,
    {
      provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
