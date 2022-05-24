var SonAccount = /** @class */ (function () {
    function SonAccount(saldoIniziale) {
        this.saldoIniziale = saldoIniziale;
    }
    SonAccount.prototype.deposit = function (deposito) {
        return this.saldoIniziale = this.saldoIniziale + deposito;
    };
    SonAccount.prototype.oneWithdraw = function (prelievo) {
        this.saldoIniziale = this.saldoIniziale - prelievo;
        return prelievo;
    };
    SonAccount.prototype.twoWithdraw = function (prelievo) {
        this.saldoIniziale = this.saldoIniziale - prelievo;
        return prelievo;
    };
    SonAccount.prototype.totalBalance = function () {
        return this.saldoIniziale + '€';
    };
    return SonAccount;
}());
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
var son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(saldoIniziale) {
        this.saldoIniziale = saldoIniziale;
    }
    MotherAccount.prototype.deposit = function (deposito) {
        return this.saldoIniziale = this.saldoIniziale + deposito;
    };
    MotherAccount.prototype.oneWithdraw = function (prelievo) {
        this.saldoIniziale = this.saldoIniziale - prelievo;
        return prelievo;
    };
    MotherAccount.prototype.twoWithdraw = function (prelievo) {
        this.saldoIniziale = this.saldoIniziale - prelievo;
        return prelievo;
    };
    MotherAccount.prototype.totalBalance = function () {
        var sconto = 10;
        return this.saldoIniziale - ((this.saldoIniziale * sconto / 100)) + '€';
    };
    return MotherAccount;
}());
var mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
