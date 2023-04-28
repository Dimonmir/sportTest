import * as yup from 'yup';

const validationSchema = yup.object({
    age: yup
      .number()
      .lessThan(13,'Возраст должен быть меньше!')
      .moreThan(5,'Возраст должен быть больше!')
      .typeError('Введите число!')
      .required('Возраст нужно заполнить обязательно!'),
    height: yup
      .number()
      .typeError('Введите число!')
      .required('Рост нужно заполнить обязательно!'),
    weight: yup
      .number()
      .typeError('Введите число!')
      .required('Вес нужно заполнить обязательно!'),
    longShoulder: yup
      .number()
      .typeError('Введите число!')
      .required('Длину плеча нужно заполнить обязательно!'),
    task1: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task2: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task3: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task4: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task5: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task6: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task7: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task8: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
    task9: yup
      .number()
      .typeError('Введите число!')
      .required('Информацию о выполнении задания нужно заполнить обязательно!'),
  });

export default validationSchema