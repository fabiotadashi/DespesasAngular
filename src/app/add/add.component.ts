import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

/* Serviços */
import { DespesaService }         from '../despesa.service';
import { TipoDespesaService }         from '../tipoDespesa.service';

/* Classes */
import { Despesa }                from '../despesa';
import { TipoDespesa }                from '../tipoDespesa';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
    despesa: Despesa;
    data: String;
    listaTipo : TipoDespesa[];
    tipoId : number;
    tipoDespesa : TipoDespesa;

  constructor(  
                private despesaService : DespesaService,
                private tipoDespesaService: TipoDespesaService,
                private router: Router) { }

  ngOnInit() {
      this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);
      this.listaTipo = this.tipoDespesaService.getTipoDespesas();
  }

  save() : void {
      this.despesa.data = new Date(this.data+"T12:00:00Z");
      this.tipoDespesa = this.tipoDespesaService.getTipoDespesaById(this.tipoId);
      if(this.tipoDespesa){
        this.despesa.icone = this.tipoDespesa.icone;
        this.despesa.tipo = this.tipoDespesa.nome;
      }
      this.despesaService.save(this.despesa);
      this.router.navigate(['/list']);
  }

  adicionarTipo() : void {
      this.router.navigate(['/addTipo']);
  }
  
}
