import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { SBox } from "./s-contentBody";

interface IContentBody {
    title: string,
    description: string[],
    text: string,
    url: string,
}

const ContentBody:FC<IContentBody> = (props)=> {
    return (
        <SBox sx={{textAlign: "center"}}>
            <Typography className="title" variant="h3" color={"primary"}><b>{props.title}</b></Typography>
            <Box sx={{textAlign: "left"}}>
            {props.description.map((item)=>{
                return <Typography variant="subtitle1">{item}</Typography>
            })}
            </Box>
            <Typography variant="subtitle1">{props.text}</Typography>
            <iframe width="560" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </SBox>
    )
}

export default ContentBody