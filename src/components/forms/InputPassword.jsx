import { useState } from 'react'
import classNames from 'classnames'
import { get, has } from 'lodash'

export default function InputPassword({
  register,
  errors,
  name,
  rules,
  className,
  wrapClassName,
  labelClassName,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={classNames('input-group mb-[15px]', wrapClassName)}>
      <div className="relative">
        <input
          autoComplete="new-password"
          spellCheck="false"
          autoCorrect="off"
          name={name}
          type={showPassword ? 'text' : 'password'}
          {...register?.(name, rules)}
          {...props}
          className={classNames('base-input w-full pr-[35px]', className)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={classNames(
            'right-base absolute top-[58%] w-8 h-8 -translate-y-1/2 py-1.5 px-2 opacity-[0.175] cursor-pointer',
            {
              eyeicon: !showPassword,
              'eyeicon-hide': showPassword,
            }
          )}
        />
      </div>
      {has(errors, name) && (
        <p className="input-error">{get(errors, name).message}</p>
      )}
    </div>
  )
}
