function Account(name, balance){
	this.name = name;
	this.balance = balance;
}

Account.prototype.deposit = function(deposit) {
	this.balance = this.balance + deposit;
	return this.balance;
}
Account.prototype.withdrawal = function(withdrawal) {
	this.balance = this.balance - withdrawal;
	return this.balance;
}
var account = new Account;

function resetFields() {
  $("input#name").val("");
  $("input#initialDeposit").val("");
  $("input#deposit").val("");
  $("input#withdrawal").val("");
}

	$(document).ready(function() {

		$("#newAccount").submit(function(event) {
			event.preventDefault();

			var initialDeposit = parseFloat($("#initialDeposit").val());
			var name = $("#name").val();
			$("#balance").val(initialDeposit);
			account.name = name;
			account.balance = initialDeposit;
			$("#newAccount").hide();
			resetFields();
		});

		$("#transactions").submit(function(event){
			event.preventDefault();

			var deposit = parseFloat($("#deposit").val());
			var withdrawal = parseFloat($("#withdrawal").val());
			var newAmount = account.balance;
			if (deposit) {
				newAmount = account.deposit(deposit);
			} if (withdrawal) {
			newAmount = account.withdrawal(withdrawal);
			}
			$("#balance").val(newAmount);

			resetFields();
		});
		});
