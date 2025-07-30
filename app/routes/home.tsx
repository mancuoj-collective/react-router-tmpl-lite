import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'React Router' },
    { name: 'description', content: 'React router starter template' },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <button type="button" className="btn btn-primary">
        <a
          href="https://github.com/mancuoj-collective/react-router-tmpl-lite"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </button>
    </div>
  )
}
