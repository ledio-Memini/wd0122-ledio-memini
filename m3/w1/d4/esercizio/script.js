"use strict";
fetch("Abbigliamento.json")
    .then(res => res.json())
    .then(res => {
    console.log(res);
    for (let abbigliamento of res) {
        class Abbigliamento {
            constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibilità, saldo) {
                this.id = id;
                this.codprod = codprod;
                this.collezione = collezione;
                this.capo = capo;
                this.modello = modello;
                this.quantita = quantita;
                this.colore = colore;
                this.prezzoivaesclusa = prezzoivaesclusa;
                this.prezzoivainclusa = prezzoivainclusa;
                this.disponibilità = disponibilità;
                this.saldo = saldo;
            }
            getsaldocapo() {
                let sconto = ((this.prezzoivainclusa * this.saldo) / 100);
                return sconto;
            }
            getacquistocapo() {
                let caposcontato = this.prezzoivainclusa - ((this.prezzoivainclusa * this.saldo) / 100);
                return caposcontato;
            }
        }
        let abbigliamento1 = new Abbigliamento(abbigliamento.id, abbigliamento.codprod, abbigliamento.collezione, abbigliamento.capo, abbigliamento.modello, abbigliamento.quantita, abbigliamento.colore, abbigliamento.prezzoivaesclusa, abbigliamento.prezzoivainclusa, abbigliamento.disponibilità, abbigliamento.saldo);
        console.log(abbigliamento1);
        console.log('sconto: ' + abbigliamento1.getsaldocapo() + '€');
        console.log('vestito con sconto applicato: ' + '(' + abbigliamento1.prezzoivainclusa + '€' + ' - ' + abbigliamento1.getsaldocapo() + '€' + ') ' + '= ' + abbigliamento1.getacquistocapo() + '€');
    }
});
//# sourceMappingURL=script.js.map