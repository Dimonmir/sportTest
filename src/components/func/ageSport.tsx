import { INormReq, INormRes } from "./models"

export const normaBoy6 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 3,
                max: 7
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 120,
                max: 140
            }
        },
        {
            type: ["power"],
            norm: {
                min: 3,
                max: 4
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 10,
                max: 17
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 9.2,
                max: 10
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 6.0,
                max: 6.7
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 12,
                max: 16
            }
        },
    ]
    return norma
}

export const normaGirl6 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 9
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 115,
                max: 135
            }
        },
        {
            type: ["power"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 9.5,
                max: 10.4
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 6.2,
                max: 6.8
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 12,
                max: 16
            },
        },
    ]
    return norma
}

/////////////////// ПРОСТО СКОПИРОВАННЫЕ РЕЗУЛЬТАТЫ /////////////////////////////////////
export const normaBoy7 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 3,
                max: 7
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 120,
                max: 140
            }
        },
        {
            type: ["power"],
            norm: {
                min: 3,
                max: 4
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 10,
                max: 17
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 9.2,
                max: 10
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 6.0,
                max: 6.7
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 14,
                max: 17
            },
            less: true
        },
    ]
    return norma
}

export const normaGirl7 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 9
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 115,
                max: 135
            }
        },
        {
            type: ["power"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 9.5,
                max: 10.4
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 6.2,
                max: 6.8
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 14,
                max: 17
            },
            less: true
        },
    ]
    return norma
}
export const normaBoy8 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 3,
                max: 7
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 120,
                max: 140
            }
        },
        {
            type: ["power"],
            norm: {
                min: 3,
                max: 4
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 10,
                max: 17
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 9.2,
                max: 10
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 6.0,
                max: 6.7
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 17,
                max: 21
            },
            less: true
        },
    ]
    return norma
}

export const normaGirl8 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true,
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 9
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 115,
                max: 135
            }
        },
        {
            type: ["power"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 6,
                max: 11
            }
        },
        {
            type: ["coordination"],
            norm: {
                min: 9.5,
                max: 10.4
            }
        },
        {
            type: ["speed"],
            norm: {
                min: 6.2,
                max: 6.8
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 0,
                max: 0.5
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 17,
                max: 21
            },
            less: true
        },
    ]
    return norma
}
export const normaBoy9 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 4,
                max: 8
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 140,
                max: 160
            }
        },
        {
            type: ["power"],
            norm: {
                min: 3,
                max: 5
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 13,
                max: 22
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 8.5,
                max: 9.3
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 5.4,
                max: 6.0
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.50,
                max: 5.50
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 21,
                max: 23
            }
        },
    ]
    return norma
}

export const normaGirl9 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 11
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 130,
                max: 150
            }
        },
        {
            type: ["power"],
            norm: {
                min: 9,
                max: 15
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 7,
                max: 13
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 8.7,
                max: 9.5
            }
        },
        {
            type: ["speed"],
            norm: {
                min: 5.6,
                max: 6.2
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 5.10,
                max: 6.20
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 21,
                max: 23
            }
        },
    ]
    return norma
}
export const normaBoy10 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 4,
                max: 8
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 140,
                max: 160
            }
        },
        {
            type: ["power"],
            norm: {
                min: 3,
                max: 5
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 13,
                max: 22
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 8.5,
                max: 9.3
            }
        },
        {
            type: ["speed"],
            norm: {
                min: 5.4,
                max: 6.0
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.50,
                max: 5.50
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 24,
                max: 26
            }
        },
    ]
    return norma
}

export const normaGirl10 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 11
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 130,
                max: 150
            }
        },
        {
            type: ["power"],
            norm: {
                min: 9,
                max: 15
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 7,
                max: 13
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 8.7,
                max: 9.5
            }
        },
        {
            type: ["speed"],
            norm: {
                min: 5.6,
                max: 6.2
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 5.10,
                max: 6.20
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 24,
                max: 26
            }
        },
    ]
    return norma
}
export const normaBoy11 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            },
            less: true
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 9
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 160,
                max: 180
            }
        },
        {
            type: ["power"],
            norm: {
                min: 4,
                max: 7
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 18,
                max: 28
            }
        },
        {
            type: ["koordination"],
            norm: {
                min: 7.9,
                max: 8.7
            }
        },
        {
            type: ["speed"],
            norm: {
                min: 5.1,
                max: 5.5
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.30,
                max: 4.50
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 27,
                max: 35
            },
            less: true
        },
    ]
    return norma
}

export const normaGirl11 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            }
        },
        {
            type: ["flexibility"],
            norm: {
                min: 6,
                max: 13
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 145,
                max: 165
            }
        },
        {
            type: ["power"],
            norm: {
                min: 11,
                max: 17
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 9,
                max: 14
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 8.2,
                max: 9.1
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 5.3,
                max: 5.8
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.50,
                max: 5.10
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 27,
                max: 35
            },
            less: true
        },
    ]
    return norma
}
export const normaBoy12 = (param:INormReq) : INormRes[] => {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            }
        },
        {
            type: ["flexibility"],
            norm: {
                min: 5,
                max: 9
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 160,
                max: 180
            }
        },
        {
            type: ["power"],
            norm: {
                min: 4,
                max: 7
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 18,
                max: 28
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 7.9,
                max: 8.7
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 5.1,
                max: 5.5
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.30,
                max: 4.50
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 35,
                max: 45
            },
            less: true
        },
    ]
    return norma
}

export const normaGirl12 = (param:INormReq) : INormRes[]=> {
    let norma = [
        {
            type: ["flexibility"],
            norm: {
                min: Number(param.longShoulder) * 2 + 10,
                max: Number(param.longShoulder) * 2 + 10
            }
        },
        {
            type: ["flexibility"],
            norm: {
                min: 6,
                max: 13
            }
        },
        {
            type: ["power", "speed"],
            norm: {
                min: 145,
                max: 165
            }
        },
        {
            type: ["power"],
            norm: {
                min: 11,
                max: 17
            }
        },
        {
            type: ["power", "stamina"],
            norm: {
                min: 9,
                max: 14
            }
        },
        {
            type: ["koordination", "speed"],
            norm: {
                min: 8.2,
                max: 9.1
            },
            less: true
        },
        {
            type: ["speed"],
            norm: {
                min: 5.3,
                max: 5.8
            },
            less: true
        },
        {
            type: ["stamina"],
            norm: {
                min: 4.50,
                max: 5.10
            },
            less: true
        },
        {
            type: ["koordination"],
            norm: {
                min: 35,
                max: 45
            },
            less: true
        },
    ]
    return norma
}
/////////////////// ПРОСТО СКОПИРОВАННЫЕ РЕЗУЛЬТАТЫ /////////////////////////////////////