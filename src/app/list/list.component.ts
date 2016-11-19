import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import * as moment from 'moment';

/* Serviços */
import { DespesaService }         from '../despesa.service';

/* Classes */
import { Despesa }                from '../despesa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  despesas: Despesa[];
  invisiveis: boolean[]=[];
  months: string[]=[];
  monthSelected: string;

  constructor(  private despesaService: DespesaService,
                private router: Router) { }

  ngOnInit() {
    this.getDespesas();
    for (let despesa of this.despesas){
        this.invisiveis[despesa.id] = false;
    }
    var count = 0;
    this.monthSelected = 'Todos'
    this.months.push('Todos');
    while (count < 12) {
       this.months.push(moment().month(count++).format("MMMM"));
    }
  }

  getTotalMesTexto(): string {
    if(this.monthSelected == 'Todos'){
      return;
    }else{
      return 'em '+this.monthSelected;
    }
  }

  onChange(month) {
    this.despesas = [];
    let despesasList = this.despesaService.getDespesas();
    for (var i=0; i < despesasList.length; i++){
        if ( moment(despesasList[i].data).format("MMMM") == this.monthSelected || this.monthSelected == 'Todos')
        {
            this.despesas.push(despesasList[i]);
        }
    }
  }

  getDespesas(): void {
    this.despesas = this.despesaService.getDespesas();
  }

  getTotalDespesas(): number {
      let total = 0;
      for (let despesa of this.despesas){
        total += despesa.valor;
      }
      return total;
    }

  add(): void {
    this.router.navigate(['/add']);
  }
  
  del(despesaId: number): void {
    this.despesaService.delete(despesaId);
    this.invisiveis[despesaId] = true;
  }
}
