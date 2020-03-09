function downloadScript(src) {
    var script = document.createElement('script');
    script.src = `${src}`;
    document.head.appendChild(script);
    script.onload = function () {
    alert('Скрипт был загружен');
    }
}
// downloadScript(src);
 // Функция создания контента страницы с добавлением платежей
 //CreateNoteForm (inputdArr, labelArray, fieldId, saveBtnId, wrapper);
//  document.getElementById('paymentDate').setAttribute('type', 'date');
//  paymentDetailsTextArea = document.createElement('textarea');
//  paymentDetailsTextArea.setAttribute('id', 'paymentDetails');
//  document.getElementById('paymentDetails').replaceWith(paymentDetailsTextArea);
//  // correct form selector
//  let cathegoryInput = document.getElementById('paymentCathegory');
//  cathegoryInput.replaceWith(paymentCathegorySelector);
//  paymentCathegorySelector.setAttribute('id', 'paymentCathegory');
 // Форма поступления
//  CreateNoteForm (iInputdArr, ilabelArray, iFormId, isaveBtnId, wrapper);
// let iDetailsTextArea = document.createElement('textarea');
// iDetailsTextArea.setAttribute('id', 'iDetails');
// document.getElementById('iDetails').replaceWith(iDetailsTextArea);
// document.getElementById('iDate').setAttribute('type', 'date');
// let incomeForm = document.getElementById('addIncomeForm');
// incomeForm.classList.add('addPaymentNotehForm', 'secondForm');
// ///////////////////////////////////////////////////////////////////////////////// добавила селекторы
// sourcesArr = [{name: 'Карта', id: 'Card'}, {name: 'Наличные', id: 'Cash'}, {name: 'Депозит', id: 'Deposit'}]
// let sourceSelector = new CreateSelector(sourcesArr);
// let paymentSelector = document.getElementById('source');
// paymentSelector.replaceWith(sourceSelector);
// sourceSelector.setAttribute('id', 'source');
// let sourceSelector2 = new CreateSelector(sourcesArr);
// let incomeCathegoryInput = document.getElementById('iSource');
// incomeCathegoryInput.replaceWith(sourceSelector2);
// sourceSelector2.setAttribute('id', 'iSource');
// let incomeSelector = document.getElementById('iName');
// incomeSelector.replaceWith(incomeCathegorySelector);
// incomeCathegorySelector.setAttribute('id', 'iName');
// /////////////////////////******************ФОРМА РЕГИСТРАЦИИ******************/////////////////////////







