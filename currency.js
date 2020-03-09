function CurrentCourse() {
    const url = "http://www.nbrb.by/API/ExRates/Rates?Periodicity=0";
    fetch(url)
        .then(response => response.json())
        .then(data => {

            let usd = {
                abbr: data[4].Cur_Abbreviation,
                scale: data[4].Cur_Scale,
                rate: data[4].Cur_OfficialRate
            };
            let eur = {
                abbr: data[5].Cur_Abbreviation,
                scale: data[5].Cur_Scale,
                rate: data[5].Cur_OfficialRate
            };
            let rub = {
                abbr: data[16].Cur_Abbreviation,
                scale: data[16].Cur_Scale,
                rate: data[16].Cur_OfficialRate
            };

            const currentCourseEl = document.createElement('div');
            currentCourseEl.innerHTML = `
                                        <ul>
                                            <li> <span>${usd.scale} ${usd.abbr}:</span> <span>${usd.rate} </span> <span> BYN </span> </li>
                                            <li> <span>${eur.scale} ${eur.abbr}:</span> <span>${eur.rate} </span>  <span> BYN </span></li>
                                            <li> <span>${rub.scale} ${rub.abbr}: </span> <span>${rub.rate} </span> <span> BYN </span></li>
                                        </ul>
                                        `;
            
            const currentCourseBox = document.createElement('div');
            currentCourseBox.classList.add('currentCourseBox');
            container_2.append(currentCourseBox);
            currentCourseBox.append(currentCourseEl);
        });
}