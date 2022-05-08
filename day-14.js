// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/train/javascript

// Job Matching #3

// Finally... :)

function match(candidate, job) {
  for (let i = 0; i < job.skills.length; i++) {
    let skill = job.skills[i];
    let substitutions = skill.substitutions;
    let matchSkill = candidate.skills.find((x) => x.name === skill.name);
    if (matchSkill == null || matchSkill.length == 0) {
      for (let j = 0; j < substitutions.length; j++) {
        matchSkill = candidate.skills.find(
          (x) => x.name === substitutions[j].name
        );
        break;
      }
    }
    if (matchSkill == null || matchSkill.length == 0) return false;
    if (matchSkill.preference === "avoid") return false;
    if (matchSkill.preference === "desired") matchSkill.experience *= 1.5;
    if (matchSkill.experience < skill.idealYears) return false;
  }
  return true;
}
