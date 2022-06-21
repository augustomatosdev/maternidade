import React from "react";
import { provinces } from "../../utils/privinces";

export default function ContactDataForm({ state, handleChange }) {
  const municipalties = provinces.filter(
    (el) => el.province === state.province
  )[0].municipalties;
  return (
    <div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="email"
                value={state.email}
                onChange={handleChange}
                class="input"
                type="email"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Telefone</label>
        </div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">+244</a>
              </p>
              <p class="control is-expanded">
                <input
                  name="phone"
                  value={state.phone}
                  onChange={handleChange}
                  class="input"
                  type="tel"
                  placeholder=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Endereço</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="address"
                value={state.address}
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
          <label class="label">Província</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  name="province"
                  value={state.province}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                  {provinces.map((el) => (
                    <option key={el.province} value={el.province}>
                      {el.province}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Município</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  name="municipalty"
                  value={state.municipalty}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                  {municipalties.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Pessoa de emergência</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="emergencyPerson"
                value={state.emergencyPerson}
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
          <label class="label">Contacto de emergência</label>
        </div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">+244</a>
              </p>
              <p class="control is-expanded">
                <input
                  name="emergencyPhone"
                  value={state.emergencyPhone}
                  onChange={handleChange}
                  class="input"
                  type="tel"
                  placeholder=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
