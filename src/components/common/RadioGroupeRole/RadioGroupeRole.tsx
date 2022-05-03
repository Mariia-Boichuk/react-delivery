import React from "react";

const RadioGroupeRole = ({ formik }) => {
  return (
    <div>
      <label >Role</label>
      <label>
        <input
          type="radio"
          name="role"
          value="SHIPPER"
          checked={formik.values.role === "SHIPPER"}
          onChange={formik.handleChange}
        />
        SHIPPER
      </label>
      <label>
        <input
          type="radio"
          name="role"
          value="DRIVER"
          checked={formik.values.role === "DRIVER"}
          onChange={formik.handleChange}
        />
        DRIVER
      </label>
    </div>
  );
};

export default RadioGroupeRole;
