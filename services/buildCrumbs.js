const buildCrumbs = async (root) => {
  console.log(root, 'df')
  let crumbs = []
  await up(root)

  return crumbs

}

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
    }
  }
}


export default {buildCrumbs}
