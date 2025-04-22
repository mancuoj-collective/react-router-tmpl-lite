import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'React Router' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <button className="btn btn-primary">React Router</button>
    </div>
  )
}
