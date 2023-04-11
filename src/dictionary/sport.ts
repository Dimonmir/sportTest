export type SportKeys = "bas" | "gand" | "greco" | "karate" | "konk" | "lyji" | "plav" | "tyj" | "fig" | "foot" | "hoc"


interface ISportVal {
    title: string,
    text: string,
    description: string[],
    url: string,
}

export const Sport:Record<SportKeys, ISportVal> = {
    bas: {
        title: "Футбол",
        text: "Футбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому футбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ ФУТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ."],
           url: "src/assets/foot.png",
    },
    gand: {
        title: "Баскетбол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "src/assets/foot.png",
    },
    greco: {
        title: "Баскетбол2",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "src/assets/foot.png",
    },
    karate: {
        title: "Баскетбо3л",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    konk: {
        title: "Баскетб4ол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    lyji: {
        title: "Баскетб5ол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    plav: {
        title: "Баскетб6ол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    tyj: {
        title: "Баскетбо7л",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    fig: {
        title: "Баскетб8ол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    foot: {
        title: "Баскет9бол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
    hoc: {
        title: "Баскет0бол",
        text: "Баскетбол - это получение бесценного опыта игры, который дает отличное физическое развитие и формирует лидерские качества у ребенка. Помимо этого прививается дисциплинированность, умение управлять своими эмоциями. Именно поэтому Баскетбол настолько популярен, ведь за захватывающем действе происходящем на поле стоит не только тренерский талант, но и годы работы над собой самих спортсменов которые начинаются с еще юных лет",
        description: ["ЧТО ДАЮТ ЗАНЯТИЯ БАСКЕТБОЛОМ:",
            "помогают укрепить мышцы",
            "помогают сформировать правильную осанку",
            "помогают укрепить выносливость",
            "помогают повысить скорость реакции. Помимо этого тренировки помогут",
            "предотвратить появление лишнего веса",
           "обогатить кровь кислородом и улучшить обмен веществ"],
           url: "assets/foot.png",
    },
}