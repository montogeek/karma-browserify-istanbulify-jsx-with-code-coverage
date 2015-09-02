Utils =
  pow: (x) ->
    if x < 0
      return 'Sorry, not sorry'
    Math.pow(x, 2)
  hi: () ->
    'hi'

module.exports = Utils