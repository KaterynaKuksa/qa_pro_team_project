"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


buttonSubmit.addEventListener('click', payFine);

function payFine() {
    // Валідація номера та суми
    let selectedFine = DB.find(fine => fine.номер === fineNumber.value && fine.сума === parseFloat(amount.value));
    if (!selectedFine) {
        alert("Номер не співпадає або сума не співпадає");
        return;
    }

    // Валідація паспортних даних
    let passportRegex = /^[А-Яа-я]{2}\d{6}$/;
    if (!passportRegex.test(passport.value)) {
        alert("Не вірний паспортний номер");
        return;
    }

    // Валідація номера кредитної карти
    let creditCardRegex = /^\d{16}$/;
    if (!creditCardRegex.test(creditCardNumber.value)) {
        alert("Не вірна кредитна картка");
        return;
    }

    // Валідація CVV
    let cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv.value)) {
        alert("Не вірний CVV");
        return;
    }

    // Якщо валідація пройшла успішно, видаляємо об'єкт з DB
    let index = DB.indexOf(selectedFine);
    if (index !== -1) {
        DB.splice(index, 1);
        alert("Оплата успішно виконана!");
    }
}
buttonSubmit.addEventListener('click',payFine);
function payFine(){

}