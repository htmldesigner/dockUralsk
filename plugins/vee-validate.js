import {extend, validate} from "vee-validate";
import {required, image, email, min, max, numeric, alpha} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Обязательное поле"
});

extend("image", {
  ...image,
  message: "Не верный image"
});

extend("email", {
  ...email,
  message: "Не верный формат почты"
});

extend("minPhone", {
  async validate(value, { min }) {
    const res = await validate(value, `min:${min}`,)
    return res.valid;
  },
  params: ['min'],
  message: 'Введите номер телефона'
  // message: 'Минимум {min} символов'
});

extend("max", max);
extend("min", min);

extend('digits_between', {
  async validate(value, {min, max}) {
    const res = await validate(value, `min:${min}|max:${max}`,)
    return res.valid;
  },
  params: ['min', 'max'],
  message:'От {min} до {max} символов'
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Пароль не совпадает'
});

extend("validateIIN", {
  async validate(value, { min }) {
    const res = await validate(value, `min:${min}`,)
    return res.valid;
  },
  params: ['min'],
  message: 'Не менее {min} символов'
});

extend("numberOnly", {
  ...numeric,
  message: 'Только цифры'
});
