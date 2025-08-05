'use client';

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-4 py-4  md:ml-72 md:mr-72 border-t-4 border-[#808036]">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-lg font-medium text-[#808036] hover:underline transition-all cursor-pointer"
      >
        ↑ Back to top
      </button>
    </div>
  );
}
