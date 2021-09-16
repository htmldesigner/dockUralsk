export default function ({app, store, $auth, route, redirect}) {
  if (!$auth.strategy.token.status().valid()) {
    store.commit('user/SET_KEY', null)
    $auth.logout()
    return redirect('/')
  }
}
