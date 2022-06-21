import React from "react";

function MoreInfo({ state }) {
  return (
    <div className="columns">
      {state.credentials && (
        <>
          <div className="column is-6">
            <article class="message is-info">
              <div class="message-body">
                <h1 className="subtitle">Observações:</h1>
                {state.credentials.observations}
              </div>
            </article>
            <article class="message is-info">
              <div class="message-body">
                <h1 className="subtitle">Antecedentes:</h1>
                {state.credentials.background}
              </div>
            </article>
          </div>
          <div className="column is-6">
            <article class="message is-info">
              <div class="message-body">
                <h1 className="subtitle">Tratamentos:</h1>
                {state.credentials.treatments}
              </div>
            </article>
            <article class="message is-info">
              <div class="message-body">
                <h1 className="subtitle">Cirurgias :</h1>
                {state.credentials.surgeries}
              </div>
            </article>
          </div>
        </>
      )}
    </div>
  );
}

export default MoreInfo;
