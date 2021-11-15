<template>
  <div class="layout">
    
    <div class="registration">
      <div class="registration_header">
        <div class="registration_title">Регистрация</div>
        <div class="registration_description">
          Уже есть аккаунт?
          <a href="#">Войти</a>
        </div>
      </div>

      <Input 
        title="Имя"
        placeholder="Введите Ваше имя"
        :v="$v.form.userName"
        v-model="form.userName"
        :emptyError="$v.form.userName.$dirty && !$v.form.userName.required"
        emptyErrorText="Поле не может быть пустым"
        :customError="$v.form.userName.$dirty && !$v.form.userName.userNameValidator"
        customErrorText="Имя может состоять только из букв, пробела и дефиса"
      />

      <Input 
        title="Еmail"
        placeholder="Введите ваш email"
        :v="$v.form.email"
        v-model="form.email"
        :emptyError="$v.form.email.$dirty && !$v.form.email.required"
        emptyErrorText="Поле не может быть пустым"
        :customError="$v.form.email.$dirty && !$v.form.email.email"
        customErrorText="Некорректный e-mail"
      />

      <Input 
        title="Номер телефона"
        placeholder="Введите номер телефона"
        :v="$v.form.phone"
        v-model="form.phone"
        :emptyError="$v.form.phone.$dirty && !$v.form.phone.required"
        emptyErrorText="Поле не может быть пустым"
        :customError="$v.form.phone.$dirty && !$v.form.phone.phoneValidator"
        customErrorText="Некорректный телефон"
      />

      <Select 
        selectTitle="Язык"
        :selectOptions="selectOptions"
        @changeSelect="form.lang = $event"
      />

      <Checkbox
        :ischeck="form.checkbox"
        :v="$v.form.checkbox"
        @change="form.checkbox = $event"
      />

      <button class="btn" :disabled="$v.form.$invalid">Зарегистрироваться</button>

    </div>

  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { userNameValidator, phoneValidator } from '@/validators/registration'
import Input from '@/components/forms/Input'
import Select from '@/components/forms/Select'
import Checkbox from '@/components/forms/Checkbox'


export default {
  data() {
    return {
      selectOptions: [
        {
          selectValue: 'rus',
          selectPlaceholder: 'Русский'
        },
        {
          selectValue: 'eng',
          selectPlaceholder: 'Английский'
        },
        {
          selectValue: 'china',
          selectPlaceholder: 'Китайский'
        },
        {
          selectValue: 'spanish',
          selectPlaceholder: 'Испанский'
        }
      ],
      form: {
        userName: null,
        email: null,
        phone: null,
        lang: null,
        checkbox: true
      },
    }
  },
  validations: {
    form: {
      userName: {
        required,
        userNameValidator
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        phoneValidator
      },
      checkbox: {
        sameAs: sameAs( () => true )
      }
    }
  },
  components: {
    Input,
    Select,
    Checkbox
  }
}
</script>