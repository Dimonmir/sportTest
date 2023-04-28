import { SportKeys } from "../../dictionary/sport"
import { IGetResult, INormReq, ISport } from "./models"

export const sport = (normReq:IGetResult["anthropometry"], sport:ISport) => {
    let arrSport:SportKeys[] = []
    if (sport.flexibility >=2 && sport.speed >=5 && sport.power >= 4 && sport.stamina >= 4 && (normReq.heightText === "Средний рост" || normReq.heightText === "Высокий рост")) (
        arrSport.push("bas")
    )
    if (sport.flexibility >=2 && sport.speed >=5 && sport.koordination >= 4 && sport.power >=4) (
        arrSport.push("gand")
    )
    if (sport.flexibility >=4 && sport.speed >=2 && sport.koordination >= 2 && sport.power >= 3 && (normReq.heightText === "Средний рост" || normReq.heightText === "Высокий рост")) (
        arrSport.push("greco")
    )
    if (sport.flexibility >=4 && sport.speed >=2 && sport.koordination >= 2 && sport.power >= 2 && (normReq.heightText === "Средний рост" || normReq.heightText === "Низкий рост")) (
        arrSport.push("karate")
    )
    if (sport.flexibility >=4 && sport.speed >=5 && sport.koordination >= 4 && sport.power >= 4 && sport.stamina >= 4) (
        arrSport.push("konk")
    )
    if (sport.speed >=5 && sport.power >= 3 && sport.stamina >= 4 && (normReq.heightText === "Средний рост" || normReq.heightText === "Высокий рост")) (
        arrSport.push("lyji")
    )
    if (sport.speed >=4 && sport.power >= 3 && sport.stamina >= 4 && (normReq.heightText === "Средний рост" || normReq.heightText === "Высокий рост") && (normReq.weightText === "Средний вес" || normReq.weightText === "Недостаточный вес")) (
        arrSport.push("plav")
    )
    if (sport.koordination >=2 && sport.power >= 5 && sport.stamina >= 4 && (normReq.weightText === "Средний вес" || normReq.weightText === "Избыточный вес")) (
        arrSport.push("tyj")
    )
    if (sport.flexibility >=4 && sport.koordination >= 4 && sport.stamina >= 1 && (normReq.heightText === "Средний рост" || normReq.heightText === "Низкий рост") && (normReq.weightText === "Средний вес" || normReq.weightText === "Недостаточный вес")) (
        arrSport.push("fig")
    )
    if (sport.flexibility >=2 && sport.speed >= 4 && sport.stamina >= 4) (
        arrSport.push("foot")
    )
    if (sport.flexibility >=2 && sport.speed >= 4 && sport.stamina >= 4 && sport.koordination >= 3 && sport.power >= 3) (
        arrSport.push("hoc")
    )

    return arrSport
}