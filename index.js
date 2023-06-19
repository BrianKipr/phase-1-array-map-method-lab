const tutorials = [
  'What Does The This Keyword Mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]

function titleCase() {
   return tutorials, map(function (tutorials) {
     return tutorials.split(' ').map(function(word){
      return word.charAt(0).toUppercase() + word.slice(1)
   }).join(' ')
  })
}
  console.log(titleCased())
