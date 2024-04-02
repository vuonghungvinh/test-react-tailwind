import classNames from 'classnames'
import { get, has } from 'lodash'

export default function InputText({
  register,
  errors,
  name,
  rules,
  className,
  wrapClassName,
  labelClassName,
  ...props
}) {
  return (
    <div
      className={classNames('input-group relative mb-[15px]', wrapClassName)}
    >
      <input
        autoComplete="new-password"
        spellCheck="false"
        autoCorrect="off"
        name={name}
        {...register?.(name, rules)}
        {...props}
        className={classNames('base-input w-full', className)}
      />
      {has(errors, name) && (
        <p className="input-error">{get(errors, name).message}</p>
      )}
    </div>
  )
}
