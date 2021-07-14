export default ({ app }, inject) => {
  // Inject function in Vue, context and store.
  inject('crumbsBuilder', (root) => {
    let crumbs = []
    up(root)

    function up(element) {
      if (element.parent_category) {
        crumbs.unshift({name: element.parent_category.name, path: element.parent_category.path})
       up(element.parent_category)
      }
      down(element)
    }

    function down(element) {
      if (element.name) {
        if (crumbs[0]) {
          crumbs[0].children = [{name: element.name, path: element.path}]
        }else {
          crumbs.push({name: element.name, path: element.path})
        }
      }
    }

    return crumbs
  })
}


