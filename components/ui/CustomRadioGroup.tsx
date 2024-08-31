import { FC } from "react";

export const CustomRadioGroup: FC<{
  options: string[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}> = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option}
          className="cursor-pointer flex h-full flex-1 items-center gap-2 rounded-md border border-dashed border-dark-500 bg-dark-400 p-3"
        >
          <input
            type="radio"
            id={option}
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={(e) => onChange(e.target.value)}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 ${
              selectedValue === option
                ? "bg-white border-white"
                : "border-gray-400"
            }`}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};
