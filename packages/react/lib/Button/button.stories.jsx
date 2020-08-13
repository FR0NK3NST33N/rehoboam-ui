import React from "react";

import { Button } from "./Button.jsx";

export default {
  title: "Design System|Button",
  component: Button,
};

export const basic = () => (
  <>
    <div style={{ textAlign: "center" }}>
      <h1>Basic</h1>
      <Button />
    </div>
  </>
);
