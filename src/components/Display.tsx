type PasswordValidation = {
  isMinLengthValid: boolean;
  isMaxLengthValid: boolean;
  isNumberAndLether: boolean;
  isSpecialCharacters: boolean;
};

function Display({
  isMinLengthValid,
  isMaxLengthValid,
  isNumberAndLether,
  isSpecialCharacters }: PasswordValidation) {
  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';
  return (
    <section>
      <p
        className={ isMinLengthValid ? validPassword
          : invalidPassword }
      >
        Possuir 8 ou mais caracteres

      </p>
      <p
        className={ isMinLengthValid && isMaxLengthValid ? validPassword
          : invalidPassword }
      >
        Possuir até 16 caracteres

      </p>
      <p
        className={ isNumberAndLether ? validPassword
          : invalidPassword }
      >
        Possuir letras e números

      </p>
      <p
        className={ isSpecialCharacters ? validPassword
          : invalidPassword }
      >
        Possuir algum caractere especial

      </p>
    </section>
  );
}
export default Display;
