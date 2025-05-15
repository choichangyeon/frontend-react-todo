"use client";

import React, { useState } from "react";
import CreateButton from "@/features/create/create-button";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  return (
    <section className="flex flex-row gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-52"
        placeholder="Todo를 입력해주세요."
      />
      <CreateButton title={title} onSetTitle={setTitle} />
    </section>
  );
};

export default TodoInput;
