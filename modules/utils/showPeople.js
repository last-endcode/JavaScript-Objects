const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name.toUpperCase()} <strong>${job.toUpperCase()}</strong></p>`;
    })
    .join(' ');
  return newPeople;
};

export default showPeople;
