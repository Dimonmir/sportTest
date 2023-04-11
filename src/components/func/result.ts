import { SportKeys } from "../../dictionary/sport";
import { normaBoy6Anthropometry } from "./ageAnthropometry";
import { normaBoy10, normaBoy11, normaBoy12, normaBoy6, normaBoy7, normaBoy8, normaBoy9, normaGirl10, normaGirl11, normaGirl12, normaGirl6, normaGirl7, normaGirl8, normaGirl9 } from "./ageSport";
import { IGetValues, IGetResult, INormReq, INormRes, ISport, INormResAnthropometry } from "./models";
import { sport } from "./sport";

const getResult = (values:IGetValues):IGetResult => {

    let paramTest = [values.task1, values.task2, values.task3, values.task4, values.task5, values.task6, values.task7, values.task8, values.task9]
    let res:IGetResult = {
        anthropometry: {
            height: values.height,
            heightText: '',
            weight: values.weight,
            weightText: "",
            IMT: String((Number(values.weight) / (Number(values.height)/100 * Number(values.height)/100)).toFixed(2)),
            IMTText: "",
        },
        sports: [],
    };

    let param: INormReq = {
        height: values.height,
        weight: values.weight,
        longShoulder: values.longShoulder
    }

    switch (values.age) {
        case "6":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy6(param), paramTest)
                res.anthropometry = calcResAnthropometry(normaBoy6Anthropometry(), res.anthropometry)
            } else {
                res.sports = calcResSport(normaGirl6(param), paramTest)
                res.anthropometry = calcResAnthropometry(normaBoy6Anthropometry(), res.anthropometry)
            }
            break;
        case "7":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy7(param), paramTest)
            } else {
                res.sports = calcResSport(normaGirl7(param), paramTest)
            }
            break;
        case "8":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy8(param), paramTest)
            } else {
                res.sports = calcResSport(normaGirl8(param), paramTest)
            }
            break;
        case "9":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy9(param), paramTest)

            } else {
                res.sports = calcResSport(normaGirl9(param), paramTest)

            }
            break;
        case "10":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy10(param), paramTest)
            } else {
                res.sports = calcResSport(normaGirl10(param), paramTest)
            }
            break;
        case "11":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy11(param), paramTest)
            } else {
                res.sports = calcResSport(normaGirl11(param), paramTest)
            }
            break;
        case "12":
            if (values.gender === "Boy") {
                res.sports = calcResSport(normaBoy12(param), paramTest)
            } else {
                res.sports = calcResSport(normaGirl12(param), paramTest)
            }
            break;
    
        default:
            break;
    }
    return res
}

function calcResSport(param:INormRes[], values:string[]):SportKeys[]{
    let calc:ISport = {
        flexibility: 0,
        power: 0,
        speed: 0,
        coordination: 0,
        stamina: 0
    }
    param.map((item, key)=>{
        if (Number(values[key]) > item.norm.min && Number(values[key]) < item.norm.max) {
            item.type.map((value)=>{
                switch (value) {
                    case "flexibility":
                        calc.flexibility += 1
                        break;
                    case "power":
                        calc.power += 1
                        break;
                    case "speed":
                        calc.speed += 1
                        break;
                    case "coordination":
                        calc.coordination += 1
                        break;
                    case "stamina":
                        calc.stamina += 1
                        break;
                    default:
                        break;
                }
            })
        } else {
            if (Number(values[key]) > item.norm.min){
                item.type.map((value)=>{
                    switch (value) {
                        case "flexibility":
                            calc.flexibility += 2
                            break;
                        case "power":
                            calc.power += 2
                            break;
                        case "speed":
                            calc.speed += 2
                            break;
                        case "coordination":
                            calc.coordination += 2
                            break;
                        case "stamina":
                            calc.stamina += 2
                            break;
                        default:
                            break;
                    }
                })
            } 
        }
    })

    let res = sport(calc);

    return res
}

function calcResAnthropometry(param:INormResAnthropometry[], anthropometry:IGetResult["anthropometry"]):IGetResult["anthropometry"]{
    let calc:IGetResult["anthropometry"] = {
        height: '0',
        heightText: '',
        weight: "0",
        weightText: "",
        IMT: "0",
        IMTText: "",
    }
    param.map((item)=>{
        switch (item.type) {
            case "height":
                calc.height = anthropometry.height
                if (Number(calc.height) < item.norm.min ) {
                    calc.heightText = "Низкий рост"
                }
                if (Number(calc.height) > item.norm.min && Number(calc.height) < item.norm.max ) {
                    calc.heightText = "Средний рост"
                }
                if (Number(calc.height) > item.norm.max) {
                    calc.heightText = "Высокий рост"
                }
                break;

                case "weight":
                    calc.weight = anthropometry.weight
                    if (Number(calc.weight) < item.norm.min ) {
                        calc.weightText = "Недостаточный вес"
                    }
                    if (Number(calc.weight) > item.norm.min && Number(calc.weight) < item.norm.max ) {
                        calc.weightText = "Средний вес"
                    }
                    if (Number(calc.weight) > item.norm.max) {
                        calc.weightText = "Избыточный рост"
                    }
                break;

                case "IMT":
                    calc.IMT = anthropometry.IMT
                    if (Number(calc.IMT) < item.norm.min ) {
                        calc.IMTText = "Недостатая масса тела"
                    }
                    if (Number(calc.IMT) > item.norm.min && Number(calc.IMT) < item.norm.max ) {
                        calc.IMTText = "Средняя масса тела"
                    }
                    if (Number(calc.IMT) > item.norm.max) {
                        calc.IMTText = "Избыточная масса тела"
                    }
                break;
        
            default:
                break;
        }
    })

    return calc
}

export default getResult