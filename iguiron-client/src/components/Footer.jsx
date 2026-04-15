const Footer = () => {
  return (
    <div className=" bg-[#e3e3e3] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-zinc-50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-zinc-900">Bulldog Exchange </p>
          <p className="mt-1 text-sm text-zinc-900">Campus essentials, simple ordering.</p>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900">
          &copy; {new Date().getFullYear()} Bulldogs Exchange. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
