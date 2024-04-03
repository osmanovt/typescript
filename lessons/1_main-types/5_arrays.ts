const skills: string[] = ['DevOps', 'Front-end', 'Back-end'];

for (const skill of skills) {
    console.log(skill.toUpperCase());
}

const r = skills
    .filter((s: string) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, c) => a + c);

console.log(r);