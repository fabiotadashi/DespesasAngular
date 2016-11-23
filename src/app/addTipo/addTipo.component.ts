import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/* Serviços */
import { TipoDespesaService } from '../tipoDespesa.service';

/* Classes */
import { TipoDespesa } from '../tipoDespesa';

@Component({
    selector: 'app-addTipo',
    templateUrl: './addTipo.component.html',
    styleUrls: ['./addTipo.component.css']
})
export class AddTipoComponent implements OnInit {

    tipoDespesa: TipoDespesa;
    listaTipo: TipoDespesa[];
    invisiveis: boolean[] = [];

    constructor(private tipoDespesaService: TipoDespesaService,
        private router: Router) { }

    ngOnInit() {
        this.tipoDespesa = new TipoDespesa(new Date().getTime(), "", "");
        this.listaTipo = this.tipoDespesaService.getTipoDespesas();
    }

    voltar(): void {
        this.router.navigate(['/add']);
    }

    adicionar(): void {
        this.tipoDespesaService.save(this.tipoDespesa);
        this.listaTipo = this.tipoDespesaService.getTipoDespesas();
    }

    delete(id: number): void {
        this.tipoDespesaService.delete(id);
        this.invisiveis[id] = true;
    }




}