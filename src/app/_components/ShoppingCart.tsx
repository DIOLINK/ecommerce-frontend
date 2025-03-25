export default function ShoppingCart({ value }: { value: number }) {
  return (
    <button
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle disabled:opacity-75"
      disabled={value === 0}
    >
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {value > 0 && (
          <span
            className="badge badge-sm badge-soft badge-accent indicator-item max-w-xs"
            title={`${value} items`}
          >
            <p className="max-w-9 truncate">{value}</p>
          </span>
        )}
      </div>
    </button>
  )
}
