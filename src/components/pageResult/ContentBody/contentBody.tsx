import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useLayoutEffect, useState } from "react";
import { BoxButton, SBox } from "./s-contentBody";
import { Sport, SportKeys } from "../../../dictionary/sport";
import { textMail } from "../../func/mail";

interface IContentBody {
    sport: SportKeys[],
}

const ContentBody:FC<IContentBody> = ({sport})=> {
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [sportLocal, setSportLocal] = useState<SportKeys[]>(sport)
    const handleInputPhone = (e:any) => setPhone(e.target.value);
    const handleInputName = (e:any) => setName(e.target.value);
    useLayoutEffect(()=>{
        if (sportLocal.length == 0)  {
            setSportLocal(["bas", "gand", "greco", "karate", "konk", "lyji", "plav", "tyj",  "fig", "foot", "hoc"])
        } 
    }, [])
    return (
        <SBox sx={{textAlign: "center"}} id="report">
            <Typography variant="h4" color={"primary"} className="header"><b>К каким видам спорта предрасположен Ваш ребенок?</b></Typography>
            <Box className="boxCardList">
            {
                sport.length == 0 && 
                
                <Typography variant="h6" color={"secondary"}><b>К сожалению мы не смогли подобрать для Вас подходящий вид спорта, возможно вы посмотрите все варианты?</b></Typography>
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
                        <img className="boxImg" src={temp.url}/>
                    </SBox>
                )
            })}
            </Box>
            <Button  className="button InBox" variant="contained" color='secondary' fullWidth={false}><a href="https://xn--52-kmc.xn--80aafey1amqq.xn--d1acj3b/directivities?organizer=2284" target="_blank">Записаться</a></Button>
            <BoxButton>
                <Box className="boxContainer">
                    <Typography variant="h6" color={"primary"}><b>Давайте свяжемся с вами!</b></Typography>
                    <Typography variant="h6" color={"common"} align="left">Введите телефон</Typography>
                    <TextField 
                        id="mail"                        
                        label="7999999999"
                        value={phone}
                        onChange={handleInputPhone}
                        variant="outlined" />
                    <Typography variant="h6" color={"common"} align="left">Введите ваше имя</Typography>
                    <TextField 
                        id="mail"                        
                        label="Имя"
                        value={name}
                        onChange={handleInputName}
                        variant="outlined" />
                    <Button  className="button" variant="contained" color='primary' fullWidth={false}><a href={textMail(phone, name, sport)}>Отправить</a></Button>
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