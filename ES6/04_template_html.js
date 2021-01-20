const shpList = {
  names: 'lutfy',
  pirates: 'shp',
  members: ['zoro', 'sanji', 'nami'],
};

const content = document.getElementById('info-content');

// field content use innerHTML
content.innerHTML = `
<p>${shpList.names} ${shpList.pirates.toUpperCase()}</p>
<ul>List member from ${shpList.pirates.toUpperCase()}
${shpList.members
  .map((item) => {
    return `<li>${item.toUpperCase()}</li>`;
  })
  .join('')}
</ul>
`;
