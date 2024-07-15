import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { urls } from "@constants/urls.ts";
import { ApiService } from "@services/api.ts";
import formTexts from '@texts/pt-BR.json'
import { PasswordValidationData, passwordFormValidationSchema } from "./schema.ts";
import * as S from './styles.form.ts'

const parseTexts = {
  title: formTexts.formaValidation.title,
  inputs: {
    name: formTexts.formaValidation.inputs.name.placeholder,
    email: formTexts.formaValidation.inputs.email.placeholder,
    password: formTexts.formaValidation.inputs.password.placeholder,
    passwordIsValid: formTexts.formaValidation.inputs.password.valid,
    passwordsTips: formTexts.formaValidation.inputs.password.tips
  },
  api: {
    sent: formTexts.formaValidation.apiMessages.sent,
    catch: formTexts.formaValidation.apiMessages.catch,
  },
  submitButton: formTexts.formaValidation.submitButton
}

export function ValidationForm() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting, isValid, isDirty },
    watch,
  } = useForm<PasswordValidationData>({
    resolver: zodResolver(passwordFormValidationSchema),
    mode: 'onChange',
  });
  const [apiMessageStatus, setApiMessageStatus] = useState({
    message: '',
    hasRequestSuccess: false
  })

  const passwordInputWatcher = watch('password')

  const isValidSubmitForm = !isValid || isSubmitting

  async function handleCreateNewValidation(data: PasswordValidationData) {
    try {
      const apiService = new ApiService(urls.postPasswordsBase);
      const { data: postPasswordData } = await apiService.postData(urls.postPasswords, data)

      console.info(postPasswordData.requestId)
      setApiMessageStatus({ message: parseTexts.api.sent, hasRequestSuccess: true })

    } catch (error) {
      console.error('⛔', error)
      setApiMessageStatus({ message: parseTexts.api.catch, hasRequestSuccess: false })
    } finally {
      reset();
    }
  }

  return (
    <S.Container>
      <h1>{parseTexts.title}</h1>
      <S.Form onSubmit={handleSubmit(handleCreateNewValidation)}>
        <input
          disabled={isSubmitting}
          aria-invalid={!!errors.name}
          placeholder={parseTexts.inputs.name}
          required
          type="text"
          {...register('name')}
        />
        <input
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          placeholder={parseTexts.inputs.email}
          required
          type="text"
          {...register('email')}
        />
        <input
          disabled={isSubmitting}
          aria-invalid={!!errors.password}
          placeholder={parseTexts.inputs.password}
          required
          type="text"
          autoComplete="off"
          maxLength={6}
          {...register('password')}
        />
        <S.MessagesContainer aria-live="assertive" $isValidForm={isValid}>
          {isValid ? <span> {parseTexts.inputs.passwordIsValid} </span> : false}
          {Object.keys(errors).length > 0 && (
            <>
              {
                Object.values(errors).map((error, index) => {
                  return (
                    <div key={index}>
                      <span>{error.message}</span>
                    </div>
                  )
                })
              }
            </>
          )}
          {passwordInputWatcher?.length >= 1 && passwordInputWatcher?.length <= 3 ? (
            <>
              <ul>
                {Object.values(parseTexts.inputs.passwordsTips).map((tip, index) => <li key={index}>{tip}</li>)}
              </ul>
            </>
          ) : false}
        </S.MessagesContainer>
        <S.Footer $isSentMessage={apiMessageStatus.hasRequestSuccess}>
          {!isDirty && apiMessageStatus ? <span>{apiMessageStatus.message}</span> : false}
          <button
            aria-label={parseTexts.submitButton}
            disabled={isValidSubmitForm}
            type="submit"
          >
            {parseTexts.submitButton}
          </button>
        </S.Footer>
      </S.Form>
    </S.Container>
  )
}
