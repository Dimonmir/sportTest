import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { SBox } from "./s-contentBody"
import { themeMain } from "../../../ui/theme"
import { replace, useFormik } from "formik";
import validationSchema from "./formikSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContentBody = ()=> {
    const [err, setErr] = useState("")

    const navigate = useNavigate();

    function navigateResult() {
        window.scrollTo(0, 0)
        navigate('/result');
    }

    enum Options {
        Op1 = "boy",
        Op2 = "girl",
      }

    const formik = useFormik({
    initialValues: {
        gender: Options.Op1,
        age: '',
        height: '',
        weight: '',
        longShoulder: '',
        task1: '',
        task2: '',
        task3: '',
        task4: '',
        task5: '',
        task6: '',
        task7: '',
        task8: '',
        task9: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        localStorage.setItem("result",JSON.stringify(values, null, 2));
        navigateResult()
    },
    });

    return(
        <SBox>
             <Typography variant="h5" color={themeMain.palette.secondary.main}><b>Антропометрическое исследование</b></Typography>
             <form className="formBox" onSubmit={formik.handleSubmit}>
             <Box className="contentBodyForm">
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Вопрос №1</b></Typography>
                    <Typography variant="subtitle1">Какой пол у ребенка?</Typography>
                    <RadioGroup
                        aria-labelledby="gender"
                        defaultValue="boy"
                        name="gender"
                        value={formik.values.gender} 
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel name="gender" value="boy" control={<Radio name="gender"/>} label="Мальчик" />
                        <FormControlLabel name="gender" value="girl" control={<Radio name="gender"/>} label="Девочка" />
                    </RadioGroup>
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Вопрос №2</b></Typography>
                    <Typography variant="subtitle1">Сколько лет вашему ребенку?</Typography>
                    <TextField
                        id="age"
                        label="Введите возраст от 6 до 12"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                    />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Вопрос №3</b></Typography>
                    <Typography variant="subtitle1">Какой рост у Вашего ребенка?</Typography>
                    <TextField id="height"
                        label="Введите рост"
                        value={formik.values.height}
                        onChange={formik.handleChange}
                        error={formik.touched.height && Boolean(formik.errors.height)}
                        helperText={formik.touched.height && formik.errors.height}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Вопрос №4</b></Typography>
                    <Typography variant="subtitle1">Какой вес у Вашего ребенка?</Typography>
                    <TextField id="weight"
                        label="Введите вес (кг)"
                        value={formik.values.weight}
                        onChange={formik.handleChange}
                        error={formik.touched.weight && Boolean(formik.errors.weight)}
                        helperText={formik.touched.weight && formik.errors.weight}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Вопрос №4</b></Typography>
                    <Typography variant="subtitle1">Какая длина плеча у Вашего ребенка?</Typography>
                    <TextField id="longShoulder"
                        label="Введите длину плеча (см)"
                        value={formik.values.longShoulder}
                        onChange={formik.handleChange}
                        error={formik.touched.longShoulder && Boolean(formik.errors.longShoulder)}
                        helperText={formik.touched.longShoulder && formik.errors.longShoulder}
                        variant="outlined" />
                </Box>
             </Box>
             <Typography variant="h5" color={themeMain.palette.secondary.main}><b>Спортивное тестирование</b></Typography>
             <Box className="contentBodyForm">
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №1</b></Typography>
                    <Typography variant="subtitle1">Выкруты прямыми руками назад и вперед, стоя на месте (см) <a href="/guide/task1" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task1"
                        label="Введите результат"
                        value={formik.values.task1}
                        onChange={formik.handleChange}
                        error={formik.touched.task1 && Boolean(formik.errors.task1)}
                        helperText={formik.touched.task1 && formik.errors.task1}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №2</b></Typography>
                    <Typography variant="subtitle1"> Наклон вперед из положения стоя (см) <a href="/guide/task2" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task2"                        
                        label="Введите результат"
                        value={formik.values.task2}
                        onChange={formik.handleChange}
                        error={formik.touched.task2 && Boolean(formik.errors.task2)}
                        helperText={formik.touched.task2 && formik.errors.task2}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №3</b></Typography>
                    <Typography variant="subtitle1"> Прыжок в длину (см) <a href="/guide/task3" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task3"                        
                        label="Введите результат"
                        value={formik.values.task3}
                        onChange={formik.handleChange}
                        error={formik.touched.task3 && Boolean(formik.errors.task3)}
                        helperText={formik.touched.task3 && formik.errors.task3}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №4</b></Typography>
                    <Typography variant="subtitle1">Подтягивания <a href="/guide/task4" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task4"                        
                        label="Мальчики - высокая перекладина, Девочки - низкая перекладина"
                        value={formik.values.task4}
                        onChange={formik.handleChange}
                        error={formik.touched.task4 && Boolean(formik.errors.task4)}
                        helperText={formik.touched.task4 && formik.errors.task4}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №5</b></Typography>
                    <Typography variant="subtitle1">Отжимания <a href="/guide/task5" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task5"                        
                        label="Введите результат"
                        value={formik.values.task5}
                        onChange={formik.handleChange}
                        error={formik.touched.task5 && Boolean(formik.errors.task5)}
                        helperText={formik.touched.task5 && formik.errors.task5}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №6</b></Typography>
                    <Typography variant="subtitle1"> Челночный бег <a href="/guide/task6" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task6"                        
                        label="Введите результат"
                        value={formik.values.task6}
                        onChange={formik.handleChange}
                        error={formik.touched.task6 && Boolean(formik.errors.task6)}
                        helperText={formik.touched.task6 && formik.errors.task6}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №7</b></Typography>
                    <Typography variant="subtitle1"> Бег 30м <a href="/guide/task7" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task7"                        
                        label="Введите результат"
                        value={formik.values.task7}
                        onChange={formik.handleChange}
                        error={formik.touched.task7 && Boolean(formik.errors.task7)}
                        helperText={formik.touched.task7 && formik.errors.task7}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №8</b></Typography>
                    <Typography variant="subtitle1">Бег 1000 м <a href="/guide/task8" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task8"                        
                        label="Если ребенок младше 9 лет. Поставьте 1, если ребенок пробегает норматив. Поставьте 0, если норматив не выполнен"
                        value={formik.values.task8}
                        onChange={formik.handleChange}
                        error={formik.touched.task8 && Boolean(formik.errors.task8)}
                        helperText={formik.touched.task8 && formik.errors.task8}
                        variant="outlined" />
                </Box>
                <Box className="contentBodyFormItem">
                    <Typography variant="subtitle1" color={themeMain.palette.primary.main}><b>Задание №9</b></Typography>
                    <Typography variant="subtitle1">Стойка на одной ноге с закрытыми глазами <a href="/guide/task9" target="_blank" className="guide" >Инструкция</a></Typography>
                    <TextField 
                        id="task9"                        
                        label="Введите результат"
                        value={formik.values.task9}
                        onChange={formik.handleChange}
                        error={formik.touched.task9 && Boolean(formik.errors.task9)}
                        helperText={formik.touched.task9 && formik.errors.task9}
                        variant="outlined" />
                </Box>
             </Box>
             <Button  className="button" variant="contained" color='secondary' type="submit" onClick={()=>{!formik.isValid ? setErr("Пожалуйста, заполните все поля!") : setErr("")}} fullWidth={false}>Отправить</Button>
             <Typography variant="subtitle1" color={themeMain.palette.secondary.main}><b>{err}</b></Typography>
             </form>
        </SBox>
    )
}

export default ContentBody