import { expect, test, describe } from 'vitest'
import { isValidPassword } from '@utils/validators';


describe('Password Validation', () => {
  test('Should return false for incomplete password', () => {
    expect(isValidPassword('222').isValid).toBeFalsy();
  })
  test('Should return true for complete password', () => {
    expect(isValidPassword('222222').isValid).toBeTruthy();
  })

  test('Should return true for password following all rules', () => {
    expect(isValidPassword('223456').isValid).toBeTruthy();
  })

  test('Should return false for password below the range: 184759', () => {
    expect(isValidPassword('111237').isValid).toBeFalsy();
  })

  test('Should return false for password over the range: 856920', () => {
    expect(isValidPassword('888888').isValid).toBeFalsy();
  })

  test('Should return false for password with decreasing value #1', () => {
    expect(isValidPassword('236775').isValid).toBeFalsy();
  })
  test('Should return false for password with decreasing value #2', () => {
    expect(isValidPassword('224572').isValid).toBeFalsy();
  })

  test('Should return false for password without duplication #1', () => {
    expect(isValidPassword('135789').isValid).toBeFalsy();
  })
  test('Should return false for password without duplication #2', () => {
    expect(isValidPassword('234567').isValid).toBeFalsy();
  })
})


