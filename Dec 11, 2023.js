function validateCode (code) {
let codeStr = code + ""
let regex = /^[123]/;
  return regex.test(codeStr)
}