import { Injectable } from '@angular/core';
import { Despesa } from './despesa';
/* LocalStorage */
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class DespesaService {

    private despesas: Despesa[];

    constructor(private localStorageService: LocalStorageService) { }

    getDespesas(): Despesa[] {
        this.getDb();
        return this.despesas;
    }

    getDb(): void {
        this.despesas = [];
        if (this.localStorageService.get("despesas") != null) {
            let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("despesas"));
            for (let jsonObject of jsonObjectArray) {
                this.despesas.push(new Despesa(jsonObject.id, jsonObject.tipo, jsonObject.icone, jsonObject.nome, new Date(jsonObject.data), jsonObject.valor));
            }
        }
    }


    save(despesa: Despesa): void {
        this.getDb();
        this.despesas.push(despesa);
        this.localStorageService.set("despesas", JSON.stringify(this.despesas));
    }

    delete(despesaId: number): void {
        for (var i = 0; i < this.despesas.length; i++) {
            if (this.despesas[i].id == despesaId) {
                this.despesas.splice(i, 1);
            }
        }
        this.localStorageService.set("despesas", JSON.stringify(this.despesas));
    }
}