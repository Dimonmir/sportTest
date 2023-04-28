import { Sport, SportKeys } from "../../dictionary/sport";

const mailSend = "diimonmir@mail.ru"

export const textMail = (sendPhone: string, sendName: string, sendSport:SportKeys[])=>{
    let text = "mailto:";
    text += mailSend;
    text += `?subject=Заявка на звонок`;
    text += `&body=Добрый день! Меня зовут ${sendName}, мы прошли тест на определение подходящего вида спорта.`;
    if (sendSport.length != 0) {
        text += `Нам подобрали следующие виды спорта: `;
        sendSport.map((item)=>{
            text += `${Sport[item].title} `;
        })
    } else {
        text += `Нам к сожаление не удалось подобрать виды спорта. `;
    }
    text += `. Свяжитесь с нами по номеру ${sendPhone}.`;

    return text
}