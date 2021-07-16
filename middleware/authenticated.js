export default function ({app, store, route, redirect}) {
  // If the auth is not authenticated
  if (!store.state.auth.loggedIn) {
    return redirect('/')
  }
}
