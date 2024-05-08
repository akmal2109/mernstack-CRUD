import React from "react";

export const AdUser = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="Mark"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value="Otto"
                required
              />
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
