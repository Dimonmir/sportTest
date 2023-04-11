import { FC } from "react";
import { SportKeys } from "../../dictionary/sport";

export interface IGetResult {
    anthropometry: {
        height: string,
        heightText: string,
        weight: string,
        weightText: string,
        IMT: string,
        IMTText: string,
    }
    sports: SportKeys[]
}


export interface IGetValues {
    gender: string,
    age: string,
    height: string,
    weight: string,
    longShoulder: string,
    task1: string,
    task2: string,
    task3: string,
    task4: string,
    task5: string,
    task6: string,
    task7: string,
    task8: string,
    task9: string,
}

export interface INormReq {
    height: string, 
    weight: string, 
    longShoulder: string, 
}

export interface INormRes {
    type: string[]
    norm: {
        min: number,
        max: number
    }
}

export interface INormResAnthropometry {
    type: string
    norm: {
        min: number,
        max: number
    }
}

export interface ISport{
    flexibility: number,
    power: number,
    speed: number,
    coordination: number,
    stamina:number,
}