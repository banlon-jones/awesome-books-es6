const listSection = document.querySelector('.Books-section');
const addNewSection = document.querySelector('.addBook-section');
const contactSection = document.querySelector('.contact-section');

export const displayAddBookSection = () => {
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
  addNewSection.style.display = 'block';
};

export const displayContactSection = () => {
  listSection.style.display = 'none';
  contactSection.style.display = 'block';
  addNewSection.style.display = 'none';
};

export const displayListBooks = () => {
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
  listSection.style.display = 'block';
};
