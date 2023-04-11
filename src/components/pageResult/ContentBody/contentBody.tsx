import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useLayoutEffect, useState } from "react";
import { BoxButton, SBox } from "./s-contentBody";
import { Sport, SportKeys } from "../../../dictionary/sport";

interface IContentBody {
    sport: SportKeys[],
}

const ContentBody:FC<IContentBody> = ({sport})=> {
    const [mail, setMail] = useState("")
    const [sportLocal, setSportLocal] = useState<SportKeys[]>(sport)
    const handleInput = (e:any) => setMail(e.target.value);
    useLayoutEffect(()=>{
        if (sportLocal.length == 0)  {
            setSportLocal(["bas", "gand", "greco", "karate", "konk", "lyji", "plav", "tyj",  "fig", "foot", "hoc"])
        } 
    }, [])
    return (
        <SBox sx={{textAlign: "center"}}>
            <Typography variant="h4" color={"primary"}><b>К каким видам спорта предрасположен Ваш ребенок?</b></Typography>
            <Box className="boxCardList">
            {
                sport.length == 0 && 
                
                <Typography variant="h5" color={"secondary"}><b>К сожалению мы не смогли вам подобрать спорт, возможно вы посмотрите все варианты?</b></Typography>
            }
            {
            sportLocal.map((item)=>{
                let temp = Sport[item]
                return (
                    <SBox className="boxCard" key={item}>
                        <Typography variant="h5" color={"secondary"}><b>{temp.title}</b></Typography>
                        <Typography variant="subtitle1">{temp.text}</Typography>
                        <Box>
                            {temp.description.map((text)=>[
                                <Typography key={`${item}`} variant="subtitle1">{text}<br/></Typography>
                            ])}
                        </Box>
                        <img src={temp.url}/>
                    </SBox>
                )
            })}
            </Box>
            <BoxButton>
                <Box className="boxContainer">
                    <Typography variant="h6" color={"primary"}><b>Отправить на почту</b></Typography>
                    <Typography variant="h6" color={"common"} align="left">Введите почту</Typography>
                    <TextField 
                        id="mail"                        
                        label="sport@mail.ru"
                        value={mail}
                        onChange={handleInput}
                        variant="outlined" />
                    <Button  className="button" variant="contained" color='secondary' fullWidth={false}>Отправить</Button>
                </Box>
                <Box className="boxContainer">
                    <Typography variant="h6" color={"primary"}><b>Печать</b></Typography>
                    <Typography variant="h6" color={"common"} align="left">Вы можете распечатать результаты, чтобы сохранить их и использовать в дальнейшем</Typography>
                    <Button  className="button" variant="contained" color='primary' onClick={()=>{window.print()}} fullWidth={false}>Печать</Button>
                </Box>
            </BoxButton>
        </SBox>
    )
}

export default ContentBody