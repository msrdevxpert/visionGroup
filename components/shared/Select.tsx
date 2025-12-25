"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

type Option = { value: string; label: string };

type RSelectProps = {
  options: Option[];
  cls?: string;
  onChange?: (option: Option | null) => void; // ✅ add
};

export default function RSelect({ options, cls, onChange }: RSelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleChange = (option: Option | null) => {
    setSelectedOption(option); // existing behavior
    onChange?.(option);        // ✅ parent notify
  };

  return (
    <Select
      classNames={{
        control: ({ isFocused }) =>
          `react-select ${isFocused ? "focused" : ""} ${cls || ""}`,
        singleValue: () => "single-value",
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
      value={selectedOption}      // 🔥 better than defaultValue
      onChange={handleChange}     // ✅ fixed
      options={options}
    />
  );
}
