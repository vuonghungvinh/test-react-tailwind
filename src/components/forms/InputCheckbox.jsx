import classNames from 'classnames'
import { get, has } from 'lodash'

export default function InputCheckbox({
  register,
  name,
  rules,
  className,
  children,
  errors,
  ...props
}) {
  return (
    <div>
      <div className={classNames('pl-7.5 relative', className)}>
        <input
          className="checkbox"
          type="checkbox"
          {...register?.(name, rules)}
          {...props}
        />
        {children}
      </div>
      {has(errors, name) && (
        <p className="input-error">{get(errors, name).message}</p>
      )}
    </div>
  )
}
