export default function ({app, store, $auth, route, redirect}) {
  if (store.state.auth.loggedIn && !$auth.strategy.token.status().valid()) {
    alert('Время скссии истекло. Авторезируйтесь снова.')
    store.commit('user/SET_KEY', null)
    $auth.logout()
    return redirect('/')
  }
}
