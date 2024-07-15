import passwordTips from '@texts/pt-BR.json'

const parseTipos = {
    mustBeNumber: passwordTips.formaValidation.inputs.password.tips.mustBeNumber,
    lengthCount: passwordTips.formaValidation.inputs.password.tips.lengthCount,
    range: passwordTips.formaValidation.inputs.password.tips.range,
    twoDigits: passwordTips.formaValidation.inputs.password.tips.twoDigits,
    crescent: passwordTips.formaValidation.inputs.password.tips.crescent,
}

export function isValidPassword(passwordStr: string) {
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    if (!regex.test(passwordStr)) {
        return { isValid: false, errorMessage: parseTipos.mustBeNumber };
    }
    if (passwordStr.length < 6) {
        return { isValid: false, errorMessage: parseTipos.lengthCount };
    }
    if (Number(passwordStr) < 184759 || Number(passwordStr) > 856920) {
        return { isValid: false, errorMessage: parseTipos.range };
    }

    const arrayFromPassword = passwordStr.split('');

    const hasAdjacentDigits = arrayFromPassword.some((digit, i, arr) => {
        return digit === arr[i + 1];
    });
    if (!hasAdjacentDigits) {
        return { isValid: false, errorMessage: parseTipos.twoDigits };
    }

    const isNonDecreasing = arrayFromPassword.every((digit, i, arr) => i === 0 || digit >= arr[i - 1]);
    if (!isNonDecreasing) {
        return { isValid: false, errorMessage: parseTipos.crescent };
    }

    return { isValid: true };
}

