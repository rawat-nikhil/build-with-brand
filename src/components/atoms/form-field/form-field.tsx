import type { HTMLInputTypeAttribute } from "react";

import "./form-field.scss";

interface BaseProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}

type FormFieldProps = BaseProps &
  (
    | { as?: "input"; type?: HTMLInputTypeAttribute }
    | { as: "textarea"; rows?: number }
    | { as: "select"; options: readonly string[] }
  );

export function FormField(props: FormFieldProps) {
  const { id, name, label, required = false, placeholder } = props;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && " *"}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={props.rows ?? 4}
          placeholder={placeholder}
          className="form-field__control"
        />
      ) : props.as === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          className="form-field__control"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          required={required}
          placeholder={placeholder}
          className="form-field__control"
        />
      )}
    </div>
  );
}
