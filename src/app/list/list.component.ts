import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

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
  
  constructor(  private despesaService: DespesaService,
                private router: Router) { }

  ngOnInit() {
    this.getDespesas();
    for (let despesa of this.despesas){
        this.invisiveis[despesa.id] = false;
    }
  }

  getDespesas(): void {
    this.despesas = this.despesaService.getDespesas();
  }

  add(): void {
    this.router.navigate(['/add']);
  }
  
  del(despesaId: number): void {
    this.despesaService.delete(despesaId);
    this.invisiveis[despesaId] = true;
  }
}
