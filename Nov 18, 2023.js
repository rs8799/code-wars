// TODO: Refactor and shorten the function

function describeAge(age) {
  const s="You're a(n) "
  return age<=12?`${s}kid`:age<18?`${s}teenager`:age<65?`${s}adult`:`${s}elderly`
}