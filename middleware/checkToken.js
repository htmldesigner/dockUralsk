export default function ({app, store, $auth, route, redirect}) {
  if (store.state.auth.loggedIn && !$auth.strategy.token.status().valid()) {
    alert('Истек токен безопасности')
    store.commit('user/SET_KEY', null)
    $auth.logout()
    return redirect('/')
  }
}
