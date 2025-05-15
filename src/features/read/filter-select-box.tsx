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
    >
      <option value="all">전체</option>
      <option value="completed">완료</option>
    </select>
  );
};

export default FilterSelectBox;
