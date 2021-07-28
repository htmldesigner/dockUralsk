<template>
  <div>
    <div class="d-flex justify-content-between mb-4">
      <div class="user">
        <p class="h1">Личный кабинет</p>
        <span class="user-name">{{user.full}}</span>
        <span @click="$emit('logOut')" class="logOut">Выйти</span>
      </div>
      <div class="form-group horizontal">
        <label for="name1" class="form-label">Показать:</label>
        <select v-model="selected" class="form-control" name="" id="name1">
          <option value="all">Все</option>
          <option value="false">Не просроченные</option>
          <option value="true">Просроченные</option>
        </select>
      </div>

    </div>

    <slot></slot>

    <div class="p-datatable-wrapper" v-if="requestList">
      <table role="table" class="p-datatable-table">
        <thead class="p-datatable-thead" role="rowgroup">
        <tr role="row">
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">№</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort ascending"></span>
                </button>
              </div>
            </div>
          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Объект</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Услуга</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Организация</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Ответственное лицо</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Дата обр.</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
          <th class="" role="cell">
            <div class="p-column-header-content">
              <span class="p-column-title">Статус</span>
              <div class="p-column-sort p-fluid">
                <button type="button" class="p-column-sort-button">
                  <span class="pi pi-sort-icon pi-sort"></span>
                </button>
              </div>
            </div>

          </th>
        </tr>
        <tr class="" role="row" v-for="(element, idx) in requestList" :key="idx">
          <td class="" role="cell">
            {{ element.number }}
          </td>
          <td class="" role="cell">
            {{ element.object }}
          </td>
          <td class="" role="cell">
            {{ element.service }}
          </td>
          <td class="" role="cell">
            {{ element.org }}
          </td>
          <td class="" role="cell">
            {{ element.responsible }}
          </td>
          <td class="" role="cell">
            {{ element.begin_date }}
          </td>
          <td class="" role="cell">
            <span :style="{color: element.status_color}">{{ element.status }}</span>
          </td>
        </tr>

        </thead>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "Cabinet",
  computed: {
    user(){
     return this.$store.state.auth.user
    },
    requestList() {
      let list = this.$store.getters['user/getRequestList']
      if (this.selected === 'all') {
        return this.$store.getters['user/getRequestList']
      } else {
        return list.filter(el => {return el.time_out === JSON.parse(this.selected)})
      }

    }
  },
  data() {
    return {
      selected: 'all'
    }
  }

}
</script>

<style scoped lang="sass">
.text-green
  color: #1DD30D

.text-yellow
  color: #E9A906

.text-orange
  color: #F25A05

.text-red
  color: #FF0D0D

.content_title_container
  display: flex
  justify-content: space-between

.show-filter_container
  display: flex
  justify-content: space-between
  font-size: 15px
  align-items: center

  .show-filter
    cursor: pointer

    .show-filter-item
      display: none
      border: 1px solid #39A9CB
      padding: 10px 12px
      border-radius: 6px
      color: #39A9CB

      &.active
        display: flex

.content_name
  color: #888888

.content_log_out
  color: #39A9CB
  cursor: pointer

.p-datatable-wrapper
  *
    font-size: 14px

  table
    min-width: 100%
    border: 1px solid #DFDFDF
    border-radius: 6px

    tr:nth-child(2n)
      background: #F3F4F4

    td, th
      padding: 16px 12px

    td:first-child, th:first-child
      padding-left: 26px

    td:last-child, th:last-child
      width: 180px
      padding-right: 26px

    th
      border-bottom: 1px solid #DFDFDF

      span
        color: #888888

    .p-column-header-content
      display: flex
      width: 100%
      justify-content: space-between

.p-column-sort-button
  border: none
  background: none

  .pi-sort-icon
    &::before
      display: inline-block
      content: url("../../assets/img/arrow-down.svg")

    &.ascending::before
      transform: rotate(180deg)

.main-aside
  border-radius: 6px
  padding: 30px 30px
</style>
