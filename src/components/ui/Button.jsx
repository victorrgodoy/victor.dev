function Button({ text }) {
  return (
    <button className="bg-[var(--color-main)] hover:bg-[#5c9fdf] text-white dark:text-black px-3 py-2 rounded-sm lg:text-xl text-md cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
