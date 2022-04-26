// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

// Job Matching #1

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) throw new Error('Missing salary!')
  return candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary;
}

/*************************************************************************/

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript

// Job Matching #2

function match(job, candidates) {
  return candidates.filter(property =>
      job.locations.some(value => [property.currentLocation, ...property.desiredLocations].includes(value)) 
                               && (job.equityMax || !property.desiresEquity));
}
