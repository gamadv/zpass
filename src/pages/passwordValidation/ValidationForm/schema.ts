import * as zod from "zod";
import formTexts from '@texts/pt-BR.json'
import { isValidPassword } from "@utils/validators";

const parseTexts = {
    nameErrorMsg: formTexts.formaValidation.inputs.name.errorMessage,
    emailErrorMsg: formTexts.formaValidation.inputs.email.errorMessage,
    passwordErrorMsg: formTexts.formaValidation.inputs.password.errorMessage
}

interface PasswordValidationResult {
    isValid: boolean;
    errorMessage?: string;
}
export const passwordFormValidationSchema = zod.object({
    name: zod.string().min(3, parseTexts.nameErrorMsg),
    email: zod.string().email(parseTexts.emailErrorMsg),
    password: zod.string()
}).superRefine((data, context) => {
    const result: PasswordValidationResult = isValidPassword(data.password);
    if (!result.isValid) {
        context.addIssue({
            code: zod.ZodIssueCode.custom,
            path: ["password"],
            message: result.errorMessage || parseTexts.passwordErrorMsg,
        });
    }
});

export type PasswordValidationData = zod.infer<typeof passwordFormValidationSchema>;


