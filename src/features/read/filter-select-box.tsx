"use client";

type Props = {
  filter: "all" | "completed";
  setFilter: (filter: "all" | "completed") => void;
};

const FilterSelectBox = ({ filter, setFilter }: Props) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value as "all" | "completed")}
      className="border border-gray-300 mb-4 rounded-md p-2 w-24"
    >
      <option value="all">전체</option>
      <option value="completed">완료</option>
    </select>
  );
};

export default FilterSelectBox;
