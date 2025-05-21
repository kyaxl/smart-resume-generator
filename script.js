const form = document.getElementById('resumeForm');

form.addEventListener('input', () => {
  document.getElementById('previewName').textContent = document.getElementById('fullName').value || 'Your Name';
  document.getElementById('previewEmail').textContent = document.getElementById('email').value || 'your.email@example.com';
  document.getElementById('previewPhone').textContent = document.getElementById('phone').value || '123-456-7890';
  document.getElementById('previewExperience').textContent = document.getElementById('experience').value || '';
  document.getElementById('previewEducation').textContent = document.getElementById('education').value || '';

  const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim()).filter(Boolean);
  const skillsList = document.getElementById('previewSkills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
});

function switchTemplate(template) {
  const preview = document.getElementById('resumePreview');
  preview.classList.remove('template1', 'template2', 'template3');
  preview.classList.add(template);
}

function downloadResume() {
  const element = document.getElementById('resumePreview');
  html2pdf().from(element).save('resume.pdf');
}
