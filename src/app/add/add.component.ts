import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

/* Serviços */
import { DespesaService }         from '../despesa.service';

/* Classes */
import { Despesa }                from '../despesa';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
    despesa: Despesa;
    data: String;

  constructor(  private despesaService : DespesaService,
                private router: Router) { }

  ngOnInit() {
      this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);
  }

  save() : void {
      this.despesa.data = new Date(this.data+"T12:00:00Z");
      this.despesaService.save(this.despesa);
      this.router.navigate(['/list']);
  }

  saveTipo() : void {
      this.despesa.data = new Date(this.data+"T12:00:00Z");
      this.despesaService.save(this.despesa);
      this.router.navigate(['/addTipo']);
  }
  
}
