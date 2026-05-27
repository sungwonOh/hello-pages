export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="max-w-xl w-full text-center bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-10">
        <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase">
          Next.js 16 · Static Export · GitHub Pages
        </p>

        <h1 className="mt-4 text-5xl font-bold text-zinc-900">
          안녕하세요 👋
        </h1>

        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          GitHub Actions에서 자동 빌드되어
          <br />
          GitHub Pages로 배포된 정적 사이트입니다.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 text-left">
          <div className="bg-zinc-50 rounded-lg p-4">
            <p className="text-xs text-zinc-500">Framework</p>
            <p className="text-sm font-semibold text-zinc-900">Next.js 16</p>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4">
            <p className="text-xs text-zinc-500">Styling</p>
            <p className="text-sm font-semibold text-zinc-900">Tailwind CSS</p>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4">
            <p className="text-xs text-zinc-500">Hosting</p>
            <p className="text-sm font-semibold text-zinc-900">GitHub Pages</p>
          </div>
          <div className="bg-zinc-50 rounded-lg p-4">
            <p className="text-xs text-zinc-500">CI/CD</p>
            <p className="text-sm font-semibold text-zinc-900">GH Actions</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-400">
          Built at {process.env.NEXT_PUBLIC_BUILD_TIME ?? new Date().toISOString()}
        </p>
      </div>
    </main>
  );
}
