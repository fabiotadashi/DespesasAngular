import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

/* Serviços */
import { DespesaService }         from '../despesa.service';

/* Classes */
import { Despesa }                from '../despesa';


//teste de commit
@Component({
  selector: 'app-addTipo',
  templateUrl: './addTipo.component.html',
  styleUrls: ['./addTipo.component.css']
})
export class AddTipoComponent implements OnInit {
    despesa: Despesa;
    data: String;

  constructor(  private despesaService : DespesaService,
                private router: Router) { }

  ngOnInit() {
      this.despesa = new Despesa(new Date().getTime(), "", "", "", new Date(), 0);
  }

  saveTipo() : void {
      this.despesa.data = new Date(this.data+"T12:00:00Z");
      this.despesaService.save(this.despesa);
      this.router.navigate(['/addTipo']);
  }
   voltar() : void {
      this.despesa.data = new Date(this.data+"T12:00:00Z");
      this.despesaService.save(this.despesa);
      this.router.navigate(['/add']);
  }

} 


/*@Component({
  selector: 'app-addTipo',
  templateUrl: './addTipo.component.html',
  styleUrls: ['./addTipo.component.css']
})
export class AddTipoComponent implements OnInit {
    despesa: Despesa;
    data: String;
	
    //Listar
    var aTipoDespesas;
        if(window.localStorage['tipoDespesas'] != ''){
            aTipoDespesas = JSON.parse(window.localStorage['tipoDespesas'] || '[]');
        }
    
    var linha = "";
    for(i=0; i<aTipoDespesas.length;i++){
        linha += '<tr>';
        linha += '<td>'+aTipoDespesas[i].tipo+'</td>';
        linha += '<td><span class="glyphicon glyphicon-'+aTipoDespesas[i].glyphicon+'"></td>';
        linha += '<td><div class="glyphicon glyphicon-trash clicavel" id='+aTipoDespesas[i].id+'></div></td>';
        linha += '</tr>';
    }
    
    $('#tabela_corpo').append(linha);

    // Adicionar
    $('#btnAdd').click(function(){
        var aTipoDespesas;
        if(window.localStorage['tipoDespesas'] != ''){
            aTipoDespesas = JSON.parse(window.localStorage['tipoDespesas'] || '[]');
        }
        
        var oTipoDespesa = {
            id: new Date().getTime(),
            tipo: $('#nome').val(),
            glyphicon: $('#glyphicon').val()
        };

        aTipoDespesas.push(oTipoDespesa);

        window.localStorage['tipoDespesas'] = JSON.stringify(aTipoDespesas);

        window.location.href="addTipo.html"

    });

    // Apagar
    $('.glyphicon-trash').click(function(){
        for(i=0; i<aTipoDespesas.length;i++){
            if(aTipoDespesas[i].id == $(this).attr('id')){
                aTipoDespesas.splice(i,1);
            }   
        }
         window.localStorage['tipoDespesas'] = JSON.stringify(aTipoDespesas);
        $(this).parent().parent().hide();
    })

*/
