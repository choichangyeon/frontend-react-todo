"use client";

import React, { useState } from "react";
import CreateButton from "@/features/create/create-button";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  return (
    <section>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CreateButton title={title} onSetTitle={setTitle} />
    </section>
  );
};

export default TodoInput;
