import classNames from 'classnames'
import { get, has } from 'lodash'

export default function InputRadio({
  label,
  register,
  errors,
  name,
  rules,
  className,
  wrapClassName,
  labelClassName,
  value,
  defaultChecked = false,
  ...props
}) {
  return (
    <div>
      <label
        className={classNames('flex items-center gap-3 pr-4', wrapClassName)}
        {...props}
      >
        <input
          {...register?.(name, rules)}
          type="radio"
          value={value}
          className={classNames('input-radio', className)}
          defaultChecked={defaultChecked}
        />
        <span className={classNames('flex-1 text-sm pt-0.5', labelClassName)}>
          {label}
        </span>
      </label>
      {has(errors, name) && (
        <p className="input-error">{get(errors, name).message}</p>
      )}
    </div>
  )
}
