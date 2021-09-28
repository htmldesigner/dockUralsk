<template>
  <div>
    <div class="d-flex justify-content-between mb-4">
      <div class="user">
        <p class="h1">{{ $t('personal_area') }}</p>
        <span class="user-name">{{ user.full }}</span>
        <!--        <span @click="$emit('logOut')" class="logOut">Выйти</span>-->
      </div>
    </div>
    <slot></slot>

    <ChangePasswordForm class="mt-5"/>

    <hr style="margin-top: 36px; margin-bottom: 36px">

    <section>

      <ValidationObserver ref="profileForm" v-slot="{ invalid }">
        <form ref="form" enctype="multipart/form-data">

          <div v-for="(profile, index) of userProfile.sections">
            <div class="section-title mb-3" v-if="profile.title">
              <p :class="profile.title.tag">{{ profile.title.text }}</p>
            </div>
            <div class="row" v-for="(rows, index) in profile.rows">
              <div :class="fields.cssClasses" v-for="(fields) in rows.fields">
                <FormGenerator
                  :row="fields"
                  :index="index"
                  @checkBoxEvent="checkBoxEvent"
                />
              </div>
            </div>
          </div>

          <div class="container mb-3 mt-3">
            <div class="row">
              <div class="col-xl-12 d-flex justify-content-center">
                <div class="col-xl-4">
                  <button @click.prevent="onSubmit" :disabled="disabledButton" type="submit"
                          class="btn_block btn_primary">
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          </div>

        </form>
      </ValidationObserver>
    </section>

  </div>
</template>

<script>
import ChangePasswordForm from "~/components/cabinet/ChangePasswordForm";
import FormGenerator from "../FormGenerator";
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  components: {
    ChangePasswordForm,
    FormGenerator,
    ValidationProvider,
    ValidationObserver,
  },
  name: "Profile",
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    userProfile() {
      return this.$store.state.cabinet.userProfile
    }
  },
  data() {
    return {
      formElem: null,
      disabledButton: false
    }
  },
  methods: {
    checkBoxEvent(event) {
      this.$store.commit('cabinet/DISABLED_FIELD', event)
    },

    async onSubmit() {
      this.$refs.profileForm.validate().then(success => {
          if (success) {
            this.sendForm()
          } else {
            let el = document.querySelector(".is-invalid").parentNode;
            el.scrollIntoView({block: "center", behavior: "smooth"});
          }
        }
      )
    },

    async sendForm() {
      this.formElem = new FormData(this.$refs.form)
      this.disabledButton = true
      try {
       await this.$axios('/api/profile/save', {
          method: 'POST',
          data: this.formElem,
          headers: {"Content-Type": "multipart/form-data"},
        })
        this.disabledButton = false
        alert('Данные обновлены')
      } catch (e) {
        alert('Ошибка отправки формы')
      } finally {
        this.disabledButton = false
      }
    }

  }
}
</script>

<style scoped>

</style>
