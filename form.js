//Вспомогательная функция для id-шников
function counter() {
    let count = 1;
    return function (){
        return count++
    }
}
//////////////////////////////////////////Категории - cоздание//////////////////////////////////////////
let cathegoryArr = [];
function createPaymentCathegory () {
let cathegories = ['Продукты', 'Коммунальные услуги', 'Кредиты', 'Медицина', 'Подарки', 'Одежда', 'Путешестия', 'Рвзвлечения', 'Транспорт', 'Другое'];
let icons = ["'fas fa-pizza-slice'", "'fas fa-home'", "'fas fa-credit-card'", "'fas fa-briefcase-medical'", "'fas fa-gift'", "'fas fa-tshirt'", "'fas fa-globe-americas'", "'fas fa-gamepad'", "'fas fa-route'", "'fas fa-users-cog'"]
let cathegoryID = ['goods', 'services', "debts", 'medicine', 'gifts', 'cloth', 'travel', 'entertainments', 'transport', 'others']
for (let i=0; i < cathegories.length; i++) {
            let newCathegory = new Cathegory (cathegories[i], icons[i], cathegoryID[i]);
            cathegoryArr.push(newCathegory);
        }
}
createPaymentCathegory ();
function Cathegory (cathegoryName, cathegoryIcon, cathegoryID) {
    this.name = cathegoryName;
    this.icon = cathegoryIcon;
    this.id = cathegoryID;
    this.sum = null;
}
/////////////////////СОЗДАНИЕ КАТЕГОРИЙ ДЛЯ ИСПОЛЬЗОВАНИЯ РЕГУЛИРОВАНИЯ ДОХОДА////////////////////////////////////////
let icathegoryArr = [];
let iCathegories = [];
function createIncomeCathegories () {
iCathegories = ['Зарплата', 'Сбережения', 'Другое', 'Депозит'];
let iIcons = ['"far fa-money-bill-alt"', '"fas fa-piggy-bank"', '"fab fa-shopify"', '"fas fa-comment-dollar"'];
let iCathegoryID = ['salary', 'savings', "others", 'passive income'];
for (let i=0; i < iCathegories.length; i++) {
        let newCathegory = new Cathegory (iCathegories[i], iIcons[i], iCathegoryID[i]);
        icathegoryArr.push(newCathegory); 
    }
}
createIncomeCathegories();

let incomeCathegorySelector = new CreateSelector(icathegoryArr);
//селектор
function CreateSelector (SelectArray) {
    let cathegorySelector = document.createElement('select');
    for (let cath = 0; cath < SelectArray.length; cath++) {
        cathegorySelector[cath] = new Option (`${SelectArray[cath].name}`, SelectArray[cath].id);
    };
    return cathegorySelector;
}
let paymentCathegorySelector = new CreateSelector(cathegoryArr);
//создание формы, общий каркас////////////////////////////

// function CreateNoteForm (inputdArr, labelArray, fieldId, saveBtnId, container) {
// let newForm = document.createElement('form');
// container.append(newForm);
// newForm.setAttribute('id', `${fieldId}`);
// let fields = inputdArr.length;
// for (let i=0; i< fields; i++) {
//     let formElement = document.createElement('div');
//     newForm.append(formElement);
//     newForm.classList.add('addPaymentNotehForm');
//     let formElementLabel = document.createElement('label');
//     formElement.append(formElementLabel);
//     formElementLabel.innerText = labelArray[i];
//     let inputWrapper = document.createElement('div');
//     formElement.append(inputWrapper);
//     let input = document.createElement('input');
//     inputWrapper.append(input);
//     input.setAttribute('id', `${inputdArr[i]}`);
// }
// let createBtn = document.createElement('button');
// newForm.append(createBtn);
// createBtn.innerText = "Сохранить";
// createBtn.classList.add('savePaymentButton');
// createBtn.setAttribute('id', `${saveBtnId}`);
// // createBtn.disabled = 'true';
// }
// Данные для формы платежей
// let inputdArr = ['paymentCathegory', 'paymentDate', 'paymentName', 'paymentSum', 'source', 'paymentDetails'];
// let labelArray = ['Категория', 'Дата платежа', 'Наименование платежа', 'Сумма', 'Оплачено из', 'Детали платежа'];
// let fieldId = 'addPaymentForm';
// let saveBtnId = 'savePaymentButton';
// //дфнные для формы поступлений
// // ФОРМА ДОБАВЛЕНИЯ ПОСТУПЛЕНИЯ И ЕЕ КОРРЕКЦИЯ//
// let iInputdArr = ['iSource', 'iDate', 'iSum', 'iName',  'iDetails'];
// let ilabelArray = ['Поступление на', 'Дата', 'Сумма', 'Источник', 'Описание'];
// let iFormId = 'addIncomeForm';
// let isaveBtnId = 'saveIncomeButton';
////////////////////////////Создание формы платежей/


