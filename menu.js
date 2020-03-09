function CreateFluidContainer () {
    let newContainer = document.createElement('div');
    newContainer.classList.add('flexRowContainer');
    document.body.append(newContainer);
    return newContainer;
}

let mainMenu = document.createElement('div');
document.body.append(mainMenu);
mainMenu.outerHTML = `
<div class='menu-wrapper' id='mainmenuWrapper'>
    <ul class="menu" id="mainmenu">
    <li><a href="#main" class="active">Главная</a></li>
    <li><a href="#about">Платежи и доходы</a></li>
    <li><a href="#contacts">Cтатистика</a></li>
    <li class="slider"></li>
</ul>
<div class="enterDiv">
<a class='littleLi' id ='enterBtn' href="#">Вход</a>
<a class ='littleLi right' id ='registrationBtn' href="#">Регистрация</a>
</div>
</div>
</div>`;
let registrationFormContainer = new CreateFluidContainer ();
document.body.append(registrationFormContainer);
function createRegistrationForm () {
    registrationFormContainer.innerHTML = `<form class="container" id='registrationForm'><input type="radio" name="tab" id="signin" checked="checked" /><input type="radio" name="tab" id="register" />
        <div class="pages">
            <div class="page">
                <div class="input">
                    <div class="title"> USERNAME</div><input class="text" type="text" placeholder="" /></div>
                <div class="input">
                    <div class="title">PASSWORD</div><input class="text" type="password" placeholder="" /></div>
                <div class="input"><input type="submit" value="ENTER" /></div>
                
            </div>
            <div class="page signup">
                <div class="input">
                    <div class="title"> NAME</div><input class="text" type="text" placeholder="" /></div>
                <div class="input">
                    <div class="title"> EMAIL</div><input class="text" type="password" placeholder="" /></div>
                    <div class="input">
                    <div class="title">PASSWORD</div><input class="text" type="password" placeholder="" /></div>
                <div class="input"><input type="submit" value="SIGN ME UP!" /></div>
            </div>
        </div>
        <div class="tabs"><label class="tab" for="signin"><div class="text">Sign In</div></label><label class="tab" for="register"><div class="text">Register</div></label></div>
    </form>`;
    registrationFormContainer.classList.add('modal', 'hidden');
    var signin = document.querySelector('#signin');
    var register = document.querySelector('#register');
    // Модалка создание  ПЕРЕДЕЛАТЬ
    let modalOverlay = document.createElement('div');
    document.body.append(modalOverlay);
    modalOverlay.classList.add('hidden', 'modal-overlay');
    modalOverlay.setAttribute('id', 'modalOverlay')
    modalOverlay.addEventListener('click', function () {
        this.classList.add('hidden');
        registrationFormContainer.classList.add('hidden');
    }
    )
    //Открытие окна регистрации ПЕРЕДЕЛАТЬ
    let enterBtn = document.getElementById('enterBtn');
    enterBtn.addEventListener('click', showRegistrationForm);
    enterBtn.addEventListener('click', function(){signin.checked = true});
    let registrationBtn = document.getElementById('registrationBtn');
    registrationBtn.addEventListener('click', function(){register.checked = true});
    registrationBtn.addEventListener('click', showRegistrationForm);
    function showRegistrationForm () {
        modalOverlay.classList.remove('hidden');
        registrationFormContainer.classList.remove('hidden');
    }
    }