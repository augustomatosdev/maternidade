import React from "react";
import ActionButtons from "./ActionButtons";

function ActionsCard() {
  return (
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          <div class="icon-text">
            <span class="icon">
              <i class="fas fa-sliders"></i>
            </span>
            <span>Danger</span>
          </div>
        </div>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default ActionsCard;
