'use client';

import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

type InputTypes = {
  type: string;
  handleSearch: any;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputSearch = ({
  type,
  value,
  handleSearch,
  onChange,
  placeholder,
}: InputTypes) => {
  const refFocus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refFocus.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl transition focus-within:border-white/40"
    >
      <input
        ref={refFocus}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-white/50"
      />

      <button
        type="submit"
        className="px-5 py-3 font-medium text-white transition cursor-pointer"
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default InputSearch;
