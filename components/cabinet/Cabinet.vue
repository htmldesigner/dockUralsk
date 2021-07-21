<template>
  <div>
    <div class="d-flex justify-content-between mb-4">
      <div class="user">
        <p class="h1">Личный кабинет (физического лица)</p>
        <span class="user-name">Константинопольский К. К.</span><span @click="$emit('logOut')"
                                                                      class="logOut">Выйти</span>
      </div>

      <div class="form-group horizontal">
        <label for="name1" class="form-label">Показать:</label>
        <select class="form-control" name="" id="name1">
          <option value="">Не просроченные</option>
          <option value="">Кем выдан документ</option>
          <option value="">Документ заявителя (H2)</option>
        </select>
      </div>

    </div>

    <slot></slot>

    <table >
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "Cabinet"
}
</script>

<style scoped>

</style>
