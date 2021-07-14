<template>

  <div class="nested_links d-md-block d-none">
    <NuxtLink class="btn_outline" :to="localePath('/catalog')">{{ $t('buttons.all_category') }}</NuxtLink>
    <div class="nested_crumbs" v-if="crumbs">
      <ul class="level_first" v-for="grandfather in crumbs">
        <li class="grandfather">
          <NuxtLink :to="localePath('/catalog/' + grandfather.path)">{{ grandfather.name }}</NuxtLink>
        </li>
        <ul class="level_second" v-if="grandfather.children">
          <li class="father" v-for="father in grandfather.children">
            <NuxtLink :to="localePath('/catalog/' + father.path)">{{ father.name }}</NuxtLink>

            <ul class="level_third" v-if="father.children">
              <li class="children" v-for="children in father.children">
                <NuxtLink :to="localePath('/catalog/' + children.path)">{{ children.name }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "Breadcrumbs",
  props: ['crumbs']
}
</script>

<style scoped>

</style>
