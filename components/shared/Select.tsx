"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

type Option = { value: string; label: string };

export default function RSelect({ options, cls }: { options: Option[]; cls?: string }) {
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <Select
      classNames={{
        control: ({ isFocused }) => `react-select ${isFocused ? "focused" : ""} ${cls}`,
        singleValue: () => "single-value",
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />
  );
}
