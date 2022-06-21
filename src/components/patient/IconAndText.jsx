import React from "react";

export default function IconAndText({ icon, text }) {
  return (
    <div>
      <p class="icon-text">
        <span class="icon">
          <i class={icon}></i>
        </span>
        <span>{text}</span>
      </p>
    </div>
  );
}
