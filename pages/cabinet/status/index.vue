<template>

  <section class="container">
    <div class="container">
      <div class="row">

        <div class="col-lg-3 bg-white left-aside s-h filter">
          <div class="requisites">
            <div class="requisites_label">
              <p>{{ $t('requisites') }}</p>
            </div>
            <div class="requisites_list">
<!--              <ul v-if="response.requisites">-->
<!--                <li v-for="item of response.requisites">-->
<!--                  <p class="requisites_name">{{ item.title }}</p>-->
<!--                  <p class="requisites_content">{{ item.text }}</p>-->
<!--                </li>-->
<!--              </ul>-->
            </div>

          </div>
        </div>

        <div class="col-lg-6 col-md-12 bg-white straight s-h">
          <div class="content">
            <div class="row">

              <div class="col-12">
                <p class="content_title h1">Получение технических условий на подключение к сетям водоснабжения и (или) водоотведения (для физических лиц)</p>
              </div>
            </div>

            <div class="service_container">

            </div>

          </div>
        </div>


        <div class="col-lg-3 bg-white s-h right">
          <button class="btn_primary btn_block">Скачать PDF</button>
          <div class="status-block">
            <div class="request">
              <span>№ Заявки</span>
              <span>470000078575</span>
            </div>
            <hr>
            <div class="status">
              <span>Статус</span>
              <span class="yellow">В обработке</span>
            </div>
          </div>


          <div class="time-line">
            <div class="steps">

              <ul>

                <li>
                  <div class="marker"></div>
                  <div class="text-status">
                    <span class="message">Принято/ Зарегистрировано</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

                <li>
                  <div class="marker"></div>
                  <div class="text-status">
                    <span class="message">Выполнено/выдано</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

                <li>
                  <div class="marker"></div>
                  <div class="text-status">
                    <span class="message">На подписании</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

                <li class="orange">
                  <div class="marker orange"></div>
                  <div class="text-status">
                    <span class="message">На проверке полноты паркета документов</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

                <li class="green">
                  <div class="marker green"></div>
                  <div class="text-status">
                    <span class="message">Принято/ Зарегистрировано</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

                <li class=" green">
                  <div class="marker green"></div>
                  <div class="text-status">
                    <span class="message">Принято/ Зарегистрировано</span>
                    <span class="status">Выполнено 01.05.2021, 10:53</span>
                  </div>
                </li>

              </ul>

            </div>
          </div>

        </div>


      </div>
    </div>
  </section>

</template>

<script>
export default {
name: "index",
  layout: 'catalogLayout',
  data(){
  return {
    processing: 'В обработке',
    status: [
      {processing: 'yellow'},
      {denied: 'red'},
    ]
  }
  }
}
</script>

<style scoped lang="sass">
.yellow
  color: #E9A906

</style>
