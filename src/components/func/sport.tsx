import { SportKeys } from "../../dictionary/sport"
import { ISport } from "./models"

export const sport = (param:ISport) => {
    let arrSport:SportKeys[] = []
    if (param.flexibility >=2 && param.speed >=4 && param.power >= 2 && param.stamina >= 4) (
        arrSport.push("bas")
    )
    if (param.flexibility >=2 && param.speed >=4 && param.coordination >= 2) (
        arrSport.push("gand")
    )
    if (param.flexibility >=3 && param.speed >=2 && param.coordination >= 3 && param.power >= 3) (
        arrSport.push("greco")
    )
    if (param.flexibility >=2 && param.speed >=3 && param.coordination >= 3 && param.power >= 3) (
        arrSport.push("karate")
    )
    if (param.flexibility >=2 && param.speed >=5 && param.coordination >= 4 && param.power >= 3 && param.stamina >= 4) (
        arrSport.push("konk")
    )
    if (param.speed >=4 && param.power >= 3 && param.stamina >= 4) (
        arrSport.push("lyji")
    )
    if (param.speed >=4 && param.power >= 3 && param.stamina >= 4) (
        arrSport.push("plav")
    )
    if (param.coordination >=2 && param.power >= 5 && param.stamina >= 4) (
        arrSport.push("tyj")
    )
    if (param.flexibility >=4 && param.coordination >= 4 && param.stamina >= 1) (
        arrSport.push("fig")
    )
    if (param.flexibility >=2 && param.speed >= 4 && param.stamina >= 4) (
        arrSport.push("foot")
    )
    if (param.flexibility >=2 && param.speed >= 4 && param.stamina >= 3 && param.coordination >= 3) (
        arrSport.push("hoc")
    )

    return arrSport
}