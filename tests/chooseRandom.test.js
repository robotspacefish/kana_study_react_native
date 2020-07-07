import { chooseRandom } from '../helpers/chooseRandom';

const hiragana = {
  "a": "あ",
  "i": "い",
  "u": "う",
  "e": "え",
  "o": "お"
}

it('does not return null or undefined', () => {
  expect.assertions(2);
  expect(chooseRandom(hiragana)).not.toBeNull()
  expect(chooseRandom(hiragana)).not.toBeUndefined()
})

it('returns a string', () => {
  expect.assertions(1);
  expect(typeof chooseRandom(hiragana)).toBe("string")
})