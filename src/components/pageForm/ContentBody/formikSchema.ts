import * as yup from 'yup';

const validationSchema = yup.object({
    age: yup
      .number()
      .typeError('Введите число!')
      .required('Возраст обязателен!'),
    height: yup
      .number()
      .typeError('Введите число!')
      .required('Рост обязателен!'),
    weight: yup
      .number()
      .typeError('Введите число!')
      .required('Вес обязателен!'),
    longShoulder: yup
      .number()
      .typeError('Введите число!')
      .required('Длина обязательна!'),
    task1: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task2: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task3: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task4: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task5: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task6: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task7: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task8: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
    task9: yup
      .number()
      .typeError('Введите число!')
      .required('Задание обязательно!'),
  });

export default validationSchema