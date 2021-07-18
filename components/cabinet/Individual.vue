<template>

  <div>
    <div class="row">
      <div class="col-12">
        <p class="h1">Заявление на выдачу технических условий на подключение к сетям электроснабжения (H1)</p>
      </div>
    </div>

    <div class="service_container">

      <section>
        <div class="section-title mb-3">
          <p class="h2">Информация о заявителе (H2)</p>
        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="name" class="form-label">ИИН заявителя<span
                class="required">*</span>
                <span class="hint" title="ИИН заявителя"></span>
              </label>
              <input id="name" type="text" disabled class="form-control" value="12313123"
                     name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="birthday" class="form-label">Дата рождения<span
                class="required">*</span></label>
              <input id="birthday" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

        </div>
        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Фамилия заявителя *<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login2" class="form-label">Имя заявителя<span
                class="required">*</span></label>
              <input id="login2" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login1" class="form-label">Отчество заявителя (при наличии)</label>
              <input id="login1" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>

        <div class="divider">
          <div class="arrow-toggler"></div>
        </div>

        <div class="section-title mb-3">
          <p class="h2">Документ заявителя (H2)</p>
        </div>
        <div class="row">

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="name1" class="form-label">Наименование документа<span
                class="required">*</span></label>
              <select class="form-control" name="" id="name1">
                <option value="">Удостоверение личн.</option>
                <option value="">Кем выдан документ</option>
                <option value="">Документ заявителя (H2)</option>
              </select>
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="iDnumber" class="form-label">Номер документа<span
                class="required">*</span></label>
              <input id="iDnumber" disabled type="text" class="form-control" value="234234"
                     name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="iDnumber1" class="form-label">Дата выдачи документа<span
                class="required">*</span></label>
              <input id="iDnumber1" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

        </div>


        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Кем выдан документ<span class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-lg-12">
            <div class="form-group mb-4">
              <label for="login1" class="form-label">Скан документа<span
                class="required">*</span></label>
              <input id="login1" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

        </div>

      </section>

      <section>

        <div class="divider">
          <div class="arrow-toggler"></div>
        </div>

        <div class="section-title mb-3">
          <p class="h2">Адрес заявителя (H2)</p>
        </div>
        <div class="row">

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="name" class="form-label">Область<span
                class="required">*</span></label>
              <input id="name" type="text" disabled class="form-control" value="12313123"
                     name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="name1" class="form-label">Город/район *<span
                class="hint"></span></label>
              <select class="form-control" name="" id="name1">
                <option value="">Удостоверение личн.</option>
                <option value="">Кем выдан документ</option>
                <option value="">Документ заявителя (H2)</option>
              </select>
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-4">
              <label for="name1" class="form-label">Населенный пункт *<span
                class="hint"></span></label>
              <select class="form-control" name="" id="name1">
                <option value="">Удостоверение личн.</option>
                <option value="">Кем выдан документ</option>
                <option value="">Документ заявителя (H2)</option>
              </select>
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Улица<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Дом</label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Квартира</label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Телефон<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Контактный мобильный телефон</label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Адрес электронной почты (email)<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

        </div>

      </section>

      <section>

        <div class="divider">
          <div class="arrow-toggler"></div>
        </div>

        <div class="section-title mb-3">
          <p class="h2">Информация об объекте подключения (H2)</p>
        </div>

        <div class="row">

          <div class="col-xl-4 col-lg-12">

            <div class="form-group mb-2">
              <label for="name" class="form-label">Наименование объекта (с указанием целевого назначения)<span
                class="required">*</span></label>
              <input id="name" type="text" class="form-control" value="12313123" name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>

          </div>

        </div>

        <hr>

        <div class="section-sub-title">
          <p class="h3">Адрес объекта подключения (H3)</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-12">

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name" class="form-label">Область<span class="required">*</span></label>
                <input id="name" type="text" class="form-control" value="12313123" name="name_user">
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name1" class="form-label">Город/район *<span
                  class="hint"></span></label>
                <select class="form-control" name="" id="name1">
                  <option value="">Удостоверение личн.</option>
                  <option value="">Кем выдан документ</option>
                  <option value="">Документ заявителя (H2)</option>
                </select>
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name1" class="form-label">Город/район *<span
                  class="hint"></span></label>
                <select class="form-control" name="" id="name1">
                  <option value="">Удостоверение личн.</option>
                  <option value="">Кем выдан документ</option>
                  <option value="">Документ заявителя (H2)</option>
                </select>
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-8 col">

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name1" class="form-label">Город/район *<span
                  class="hint"></span></label>
                <select class="form-control" name="" id="name1">
                  <option value="">Удостоверение личн.</option>
                  <option value="">Кем выдан документ</option>
                  <option value="">Документ заявителя (H2)</option>
                </select>
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="section-sub-title">
          <p class="h3">Правоустанавливающий документ на объект электроснабжения (H3)</p>
        </div>

        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Название документа<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Документ<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Название документа<span class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Документ<span class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mb-5">
          <button class="btn_primary_small">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.22 10.92H11.036V18.928H8.264V10.92H0.08V8.324H8.264V0.271998H11.036V8.324H19.22V10.92Z"
                    fill="white"/>
            </svg>

          </button>
        </div>

      </section>

      <section>

        <div class="divider">
          <div class="arrow-toggler"></div>
        </div>

        <div class="section-title mb-3">
          <p class="h2">Технические данные (H2)</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-12">

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name" class="form-label">Заявленная мощность (киллоВатт)<span
                  class="required">*</span></label>
                <input id="name" type="text" class="form-control" value="12313123" name="name_user">
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="name1" class="form-label">Категория надёжности объекта</label>
                <select class="form-control" name="" id="name1">
                  <option value="">Удостоверение личн.</option>
                  <option value="">Кем выдан документ</option>
                  <option value="">Документ заявителя (H2)</option>
                </select>
                <div class="invalid-feedback">
                  Login is invalid
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-8 col">

            <div class="col-12">
              <div class="form-group mb-4">
                <label for="exampleFormControlTextarea1" class="form-label">Перечень субпотребителей и
                  характеристики их электроустановок</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>

            <div class="col-12">
              <div class="form-group mb-4">
                <div class="form-check form-check_them">
                  <label class="form-check-label check-label_them">Наличие встроенных помещений
                    <input class="form-check-input check-input_them" type="checkbox" checked value="">
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

          </div>

        </div>


        <div class="row">
          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="name1" class="form-label">Уровень напряжения<span class="required">*</span><span
                class="hint"></span></label>
              <select class="form-control" name="" id="name1">
                <option value="">Удостоверение личн.</option>
                <option value="">Кем выдан документ</option>
                <option value="">Документ заявителя (H2)</option>
              </select>
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-8 col-lg-12">
            <div class="form-group mb-4">
              <label for="name1" class="form-label">Необходимость выдачи технических условий <span
                class="required">*</span></label>
              <select class="form-control" name="" id="name1">
                <option value="">Удостоверение личн.</option>
                <option value="">Кем выдан документ</option>
                <option value="">Документ заявителя (H2)</option>
              </select>
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="form-group mb-4">
              <label for="login3" class="form-label">Расчёт обоснование заявляемой электрической мощности<span
                class="required">*</span></label>
              <input id="login3" type="text" class="form-control" name="login">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>

        <div class="divider">
          <div class="arrow-toggler"></div>
        </div>

        <div class="section-title mb-3">
          <p class="h2">Служебная информация</p>
        </div>
        <div class="row">

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="name" class="form-label">Регистрационный номер</label>
              <input id="name" type="text" disabled class="form-control" value="12313123"
                     name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="name" class="form-label">Дата регистрации заявления</label>
              <input id="name" type="text" disabled class="form-control" value="12313123"
                     name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-12">
            <div class="form-group mb-4">
              <label for="name" class="form-label">Планируемая дата оказания услуги</label>
              <input id="name" type="text" disabled class="form-control" value="12313123"
                     name="name_user">
              <div class="invalid-feedback">
                Login is invalid
              </div>
            </div>
          </div>


        </div>
        <div class="row">

          <div class="col-xl-6 col-lg-12">
            <div class="form-group mb-4">
              <div class="form-check form-check_them">
                <label class="form-check-label check-label_them">Согласен <a class="simple_link" href="#">с
                  условием пользовательского соглашения</a>
                  <input class="form-check-input check-input_them" type="checkbox" checked value="">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-12 d-xl-inline-block d-flex justify-content-center">
            <div class="mb-4">
              <button class="btn_primary">Подписать</button>
            </div>
          </div>


        </div>
      </section>

    </div>
  </div>

</template>

<script>
export default {
  name: "Individual"
}
</script>

<style scoped>

</style>
