import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'React Router' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <button type="button" className="btn btn-primary">
        <a href="https://github.com/mancuoj-collective/remix-tmpl-lite" target="_blank" rel="noopener noreferrer">
          React Router
        </a>
      </button>
    </div>
  )
}
