const validUsers = [
  {
    // JWT eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4YjkzODc5Mi05MTQ3LTQ5YTYtYWYwNi1hYmRkMjhhOWMzMjgiLCJuYW1lIjoidGlsbGciLCJpYXQiOjE1MzkzODg4MDB9.N0fjjPms9aWS91juWgD1kTiNTs2MPRiI5ud83EROzNFzHMMfEW1mVQAU3vllhklRJyHCjV-zq2McacYtSZ_LLg
    // PW: Password1
    userId: "8b938792-9147-49a6-af06-abdd28a9c328",
    username: "tillg",
    firstName: "Till",
    lastName: "Gartner",
    email: "tgartner@gmail.com",
    password:
      "$argon2d$v=19$m=4096,t=3,p=1$Ln9XljKw4BcmP7WGkJqsHg$ubuX95jY8XlQFpxfG5W1fS3+mJ7Qfymy8YJIUlAvnOI"
  },
  {
    // JWT eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZjYxNTMyOC01YTIxLTQ1MzgtOGE5Yi1kOWUxNmE2Y2ViZDUiLCJuYW1lIjoiZHN0IiwiaWF0IjoxNTM5Mzg4ODAwfQ.piK_-r_X7_7It9ogHedIkwCesisw3-mNh7de_yUQ717vve5sdRKLJLesQrV5uTuSAD4MwVB-F53XHdFuZp-5JA
    // PW: Password1
    userId: "8f615328-5a21-4538-8a9b-d9e16a6cebd5",
    username: "dst",
    firstName: "Dennis",
    lastName: "Stötzel",
    email: "spotz@meeq.de",
    password:
      "$argon2d$v=19$m=4096,t=3,p=1$DSpFZ24ZN1ddhfKRm1SPOg$VI1hC4SP0WZxUaXVeboXnWtXEK0ABVjncCBQGbAWI3U"
  }
];

// Non existant user:
// eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3MDQ5Mjk1OC01YTZhLTQyY2UtYWYwMi01N2E2ZWY0NDFjYzYiLCJuYW1lIjoibm90X2V4aXN0YW50X3VzZXIiLCJpYXQiOjE1MzkzODg4MDB9.Byn6hKPZhzXZ_Maj1UsUMYBi6o30D_3lTlQzuITDTE8H3gcnotjLXmJCBPsS0fpSw0Lyl96umbYh1FnTgHkfyA

module.exports = {
  validUsers
};
