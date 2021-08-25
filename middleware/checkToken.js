export default function ({app, store, $auth, route, redirect}) {
  if (!$auth.strategy.token.status().valid()) {
    redirect('/')
    return $auth.logout()
  }
}
