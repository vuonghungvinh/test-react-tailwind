import { useState } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Typeform, TypeformTitle } from 'components/icons'
import LanguageSelectBox from 'components/common/LanguageSelectBox'
import {
  InputText,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from 'components/forms'
import { Expand } from 'components/icons'
import classNames from 'classnames'

const schema = Yup.object()
  .shape({
    email: Yup.string()
      .email('Enter a valid email address')
      .required('This field cannot be left blank'),
    password: Yup.string()
      .required('This field cannot be left blank')
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
        message:
          'Use 8 or more characters with a mix of letters, numbers and symbols',
      }),
    terms_and_consents: Yup.boolean().oneOf(
      [true],
      'Please accept the terms and conditions to finish the signup'
    ),
  })
  .required()

function OptionSection({ children, register, name }) {
  return (
    <div className="text-sm">
      <p className="mb-2 text-primary">{children}</p>
      <div className="flex">
        <InputRadio value="1" name={name} label="Yes" register={register} />
        <InputRadio value="0" name={name} label="No" register={register} />
      </div>
    </div>
  )
}

function App() {
  const [expand, setExpand] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      marketing: '1',
      tailor_to_needs_agreed: '1',
      third_parties_agreed: '1',
    },
  })

  const onSubmit = (fData) => {}

  return (
    <div className="flex h-screen overflow-hidden">
      <section className="flex-1 bg-primary overflow-hidden lg:flex flex-col items-center justify-center relative hidden">
        <h1 className="text-white mb-[35px] text-4xl text-center">
          Sign up <br /> and come on in
        </h1>
        <picture class="sc-95dfa289-0">
          <source
            srcset="images/product-sample@1x.webp 1x, images/product-sample@2x.webp 2x, images/product-sample@3x.webp 3x"
            type="image/webp"
          />
          <source srcset="images/product-sample@1x.webp 1x, images/product-sample@2x.webp 2x, images/product-sample@3x.webp 3x" />
          <img
            alt="Typeform product sample"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            role="presentation"
            src="images/product-sample@3x.webp"
            className="w-full max-w-[366px]"
          />
        </picture>
        <p className="absolute bottom-6 text-white text-sm">© Typeform</p>
      </section>
      <section className="flex-1 basis-[10%] lg:-ml-4 rounded-l-2xl overflow-auto h-full grid grid-cols-1 relative min-h-[90vh] grid-rows-signup-layout bg-white">
        <div className="px-6 py-2 flex justify-between items-center">
          <LanguageSelectBox className="hidden xs:block" />
          <div className="flex items-center gap-2 flex-1 justify-end">
            <p className="text-sm">Already have an account?</p>
            <div className="min-w-16 sm:min-w-0">
              <button type="button" className="btn btn-small btn-dark-outline">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center max-w-[256px] md:max-w-[542px]">
            <div className="h-20 flex gap-2.5 items-center">
              <Typeform className="w-[33px] h-5.5" />
              <TypeformTitle className="w-[108px] h-6" />
            </div>
            <h2 className="font-extralight text-2xl leading-9 text-grey-500 text-center mb-6">
              Get better data with conversational forms, surveys, quizzes &
              more.
            </h2>
            <div className="w-full md:max-w-[256px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                  placeholder="Email"
                  name="email"
                  register={register}
                  errors={errors}
                />
                <InputPassword
                  placeholder="Password"
                  name="password"
                  register={register}
                  errors={errors}
                />
                <InputCheckbox
                  className="mb-4"
                  name="terms_and_consents"
                  errors={errors}
                  register={register}
                >
                  <p className="text-primary text-sm leading-4.5">
                    I agree to Typeform’s{' '}
                    <a
                      className="underline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.typeform.com/terms-service/"
                    >
                      Terms of Service
                    </a>
                    ,{' '}
                    <a
                      className="underline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.typeform.com/privacy-policy/"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      className="underline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.typeform.com/privacy-policy/"
                    >
                      Data Processing Agreement
                    </a>
                    .
                  </p>
                </InputCheckbox>
                <div className="pl-7.5 pt-2 pb-3.75">
                  <div
                    className="flex justify-between text-sm leading-8 cursor-pointer items-baseline"
                    onClick={() => setExpand(!expand)}
                  >
                    <span>See options</span>
                    <Expand
                      className={classNames(
                        'w-3 h-[7px] duration-300 transition-all ease-out',
                        {
                          'rotate-180': !expand,
                        }
                      )}
                    />
                  </div>
                  <div
                    className={classNames(
                      'duration-200 ease-out transition-all overflow-hidden',
                      {
                        'max-h-[306px]': expand,
                        'max-h-0': !expand,
                      }
                    )}
                  >
                    <div className="flex flex-col gap-3 pb-3">
                      <OptionSection name="marketing" register={register}>
                        Get useful tips, inspiration, and offers via
                        e-communication.
                      </OptionSection>
                      <OptionSection
                        name="tailor_to_needs_agreed"
                        register={register}
                      >
                        Tailor Typeform to my needs based on my activity.{' '}
                        <a
                          href="/privacy-policy/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline text-grey-500"
                        >
                          See Privacy Policy
                        </a>
                      </OptionSection>
                      <OptionSection
                        name="third_parties_agreed"
                        register={register}
                      >
                        Enrich my data with select third parties for more
                        relevant content.{' '}
                        <a
                          href="/privacy-policy/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline text-grey-500"
                        >
                          See Privacy Policy
                        </a>
                      </OptionSection>
                    </div>
                    <p className="text-sm text-grey-600 leading-[1.2]">
                      You can update your preferences in your Profile at any
                      time
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-dark rounded-[3px] sm:max-w-[230px]"
                  >
                    Create my free account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center pl-6">
          <LanguageSelectBox className="block xs:hidden" />
        </div>
      </section>
    </div>
  )
}

export default App
