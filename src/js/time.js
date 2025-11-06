import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const eventDivs = timeContainer.querySelectorAll('div > div');
    const [marriageDiv, receptionDiv, ngunduhMantuDiv] = eventDivs;
    
    const mapLinks = timeContainer.querySelectorAll('a');
    const addressParagraphs = timeContainer.querySelectorAll('a + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('Akad & Resepsi', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Acara Panggih Manten', data.time.reception);
    ngunduhMantuDiv.innerHTML = createTimeListItem('Ngunduh Mantu', data.time.ngunduh_mantu);

    if (mapLinks[0]) mapLinks[0].href = data.link.map_reception;
    if (mapLinks[1]) mapLinks[1].href = data.link.map_ngunduh_mantu;
    
    if (addressParagraphs[0]) addressParagraphs[0].textContent = data.time.address;
    if (addressParagraphs[1]) addressParagraphs[1].textContent = data.time.address_ngunduh_mantu;
};
