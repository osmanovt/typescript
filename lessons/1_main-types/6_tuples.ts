const skill: [number, string] = [1, 'Front-end'];
const [id, skillName] = skill;

skill.push('third');
// const th = skill[2];
skill.pop();

const skillArr: [number, string, ...boolean[]] = [1, 'Front-end', true, true, false];

console.log(skillArr);
