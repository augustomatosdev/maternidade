import React from "react";

export default function AdditionalDataForm({ state, handleChange }) {
  return (
    <div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Estado civil</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  name="maritalStatus"
                  value={state.maritalStatus}
                  onChange={handleChange}
                >
                  <option value="married">Casada(o)</option>
                  <option value="fact">União de facto</option>
                  <option value="single">Solteira(o)</option>
                  <option value="divorced">Divorciado(o)</option>
                  <option value="widow">Viúva(o)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Ocupação</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="job"
                value={state.job}
                onChange={handleChange}
                class="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Fumador</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  name="smoker"
                  value={state.smoker}
                  onChange={handleChange}
                >
                  <option value="yes">Sim</option>
                  <option value="no">Não</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Filhos</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="childrenNum"
                value={state.childrenNum}
                onChange={handleChange}
                class="input"
                type="number"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
