export default function ({app, store, route, redirect }) {
  // If the auth is not authenticated
  const user = store.state.auth.user
  if (!user) {
    return redirect('/')
  }
}
