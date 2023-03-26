import ErrorRepository from "../app";

const myErrorRepository = new ErrorRepository();

test('1_error search', () => {
  expect(myErrorRepository.translate(500)).toBe('Internal Server Error');
});

test('1_error search with "Unknown error"', () => {
  expect(myErrorRepository.translate(700)).toBe('Unknown error');
});
















// const myTeam = new Team;
// myTeam.add(zombie);
// myTeam.add(undead);
// myTeam.add(zombie);
// myTeam.addAll(zombie, undead);
// console.log(myTeam.members);
// console.log(myTeam.toArray());