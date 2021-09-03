export default function ({app, store, $auth, route, redirect}) {
  if (!$auth.strategy.token.status().valid()) {
    redirect('/')
    store.commit('user/SET_KEY', null)
    return $auth.logout()
  }
}
