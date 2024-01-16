"use client";
import React, { useState } from "react";
import Show from "./show";

function Test({ data }) {
  const [values, setValues] = useState(data?.products);

  return (
    <div className="container mx-auto px-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {values?.map((value) => {
          return <Show key={value?.id} value={value} />;
        })}
      </div>
    </div>
  );
}

export default Test;
