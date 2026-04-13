export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-zinc-500 flex justify-between">
        <span>© 2025 이름</span>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}