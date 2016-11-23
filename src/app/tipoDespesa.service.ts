import { Injectable } from '@angular/core';
import { TipoDespesa } from './tipoDespesa';
/* LocalStorage */
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class TipoDespesaService {

    private tipoDespesas: TipoDespesa[];

    constructor(private localStorageService: LocalStorageService) { }

    getTipoDespesas(): TipoDespesa[] {
        this.getDb();
        return this.tipoDespesas;
    }


    getTipoDespesaById(id: number): TipoDespesa {
        this.getDb();
        let tipoDespesa;
        for (var i = 0; i < this.tipoDespesas.length; i++) {
            if (this.tipoDespesas[i].id == id) {
                tipoDespesa = this.tipoDespesas[i];
            }
        }
        return tipoDespesa;
    }

    getDb(): void {
        this.tipoDespesas = [];
        if (this.localStorageService.get("tipoDespesas") != null) {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("tipoDespesas"));
            for (let jsonObject of jsonObjectArray) {
                this.tipoDespesas.push(new TipoDespesa(jsonObject.id, jsonObject.nome, jsonObject.icone));
            }
        }
    }


    save(tipoDespesa: TipoDespesa): void {
        this.getDb();
        this.tipoDespesas.push(tipoDespesa);
        this.localStorageService.set("tipoDespesas", JSON.stringify(this.tipoDespesas));

    }

    delete(id: number): void {
        for (var i = 0; i < this.tipoDespesas.length; i++) {
            if (this.tipoDespesas[i].id == id) {
                this.tipoDespesas.splice(i, 1);
            }
        }
        this.localStorageService.set("tipoDespesas", JSON.stringify(this.tipoDespesas));
    }
}
