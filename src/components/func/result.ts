import { SportKeys } from "../../dictionary/sport";
import { normaBoy10Anthropometry, normaBoy11Anthropometry, normaBoy12Anthropometry, normaBoy6Anthropometry, normaBoy7Anthropometry, normaBoy8Anthropometry, normaBoy9Anthropometry, normaGirl10Anthropometry, normaGirl11Anthropometry, normaGirl12Anthropometry, normaGirl6Anthropometry, normaGirl7Anthropometry, normaGirl8Anthropometry, normaGirl9Anthropometry } from "./ageAnthropometry";
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
            IMT: String((parseInt(values.weight) / (parseInt(values.height)/100 * parseInt(values.height)/100)).toFixed(2)),
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
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy6Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy6(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl6Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl6(param), paramTest, res.anthropometry)
            }
            break;
        case "7":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy7Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy7(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl7Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl7(param), paramTest, res.anthropometry)
            }
            break;
        case "8":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy8Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy8(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl8Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl8(param), paramTest, res.anthropometry)
            }
            break;
        case "9":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy9Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy9(param), paramTest, res.anthropometry)

            } else {
                res.anthropometry = calcResAnthropometry(normaGirl9Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl9(param), paramTest, res.anthropometry)

            }
            break;
        case "10":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy10Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy10(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl10Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl10(param), paramTest, res.anthropometry)
            }
            break;
        case "11":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy11Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy11(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl11Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl11(param), paramTest, res.anthropometry)
            }
            break;
        case "12":
            if (values.gender === "boy") {
                res.anthropometry = calcResAnthropometry(normaBoy12Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaBoy12(param), paramTest, res.anthropometry)
            } else {
                res.anthropometry = calcResAnthropometry(normaGirl12Anthropometry(), res.anthropometry)
                res.sports = calcResSport(normaGirl12(param), paramTest, res.anthropometry)
            }
            break;
    
        default:
            break;
    }
    return res
}

function calcResSport(param:INormRes[], values:string[], paramAntry:IGetResult["anthropometry"]):SportKeys[]{
    let calc:ISport = {
        flexibility: 0,
        power: 0,
        speed: 0,
        koordination: 0,
        stamina: 0
    }
    param.map((item, key)=>{
        if (parseInt(values[key]) >= item.norm.min && parseInt(values[key]) < item.norm.max) {
            item.type.map((value)=>{
                console.log(item.less)
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
                    case "koordination":
                        calc.koordination += 1
                        break;
                    case "stamina":
                        calc.stamina += 1
                        break;
                    default:
                        break;
                }
            })
        } 
        if (parseInt(values[key]) > item.norm.max){
                item.type.map((value)=>{
                    switch (value) {
                        case "flexibility":
                            if (item.less) {
                                calc.flexibility += 0
                            } else {
                                calc.flexibility += 2
                            }
                            break;
                        case "power":
                            if (item.less) {
                                calc.power += 0
                            } else {
                                calc.power += 2
                            }
                            break;
                        case "speed":
                            if (item.less) {
                                calc.speed += 0
                            } else {
                                calc.speed += 2
                            }
                            break;
                        case "koordination":
                            if (item.less) {
                                calc.koordination += 0
                            } else {
                                calc.koordination += 2
                            }
                            break;
                        case "stamina":
                            if (item.less) {
                                calc.stamina += 0
                            } else {
                                calc.stamina += 2
                            }
                            break;
                        default:
                            break;
                    }
                })
        } 
        if (parseInt(values[key]) < item.norm.min){
            item.type.map((value)=>{
                switch (value) {
                    case "flexibility":
                        if (item.less) {
                            calc.flexibility += 2
                        } else {
                            calc.flexibility += 0
                        }
                        break;
                    case "power":
                        if (item.less) {
                            calc.power += 2
                        } else {
                            calc.power += 0
                        }
                        break;
                    case "speed":
                        if (item.less) {
                            calc.speed += 2
                        } else {
                            calc.speed += 0
                        }
                        break;
                    case "koordination":
                        if (item.less) {
                            calc.koordination += 2
                        } else {
                            calc.koordination += 0
                        }
                        break;
                    case "stamina":
                        if (item.less) {
                            calc.stamina += 2
                        } else {
                            calc.stamina += 0
                        }
                        break;
                    default:
                        break;
                }
            })
        }
    })

    console.log(calc)
    let res = sport(paramAntry, calc);
    console.log(res)
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
                console.log(item.norm.min)
                if (parseInt(calc.height) < item.norm.min ) {
                    calc.heightText = "Низкий рост"
                }
                if (parseInt(calc.height) >= item.norm.min && parseInt(calc.height) <= item.norm.max ) {
                    calc.heightText = "Средний рост"
                }
                if (parseInt(calc.height) > item.norm.max) {
                    calc.heightText = "Высокий рост"
                }
                break;

                case "weight":
                    calc.weight = anthropometry.weight
                    console.log(item.norm.min)
                    if (parseInt(calc.weight) < item.norm.min ) {
                        calc.weightText = "Недостаточный вес"
                    }
                    if (parseInt(calc.weight) >= item.norm.min && parseInt(calc.weight) <= item.norm.max ) {
                        calc.weightText = "Средний вес"
                    }
                    if (parseInt(calc.weight) > item.norm.max) {
                        calc.weightText = "Избыточный вес"
                    }
                break;

                case "IMT":
                    calc.IMT = anthropometry.IMT
                    if (parseInt(calc.IMT) < item.norm.min ) {
                        calc.IMTText = "Недостатая масса тела"
                    }
                    if (parseInt(calc.IMT) >= item.norm.min && parseInt(calc.IMT) <= item.norm.max ) {
                        calc.IMTText = "Средняя масса тела"
                    }
                    if (parseInt(calc.IMT) > item.norm.max) {
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