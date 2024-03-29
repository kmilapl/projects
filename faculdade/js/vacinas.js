const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

let id;

// Create element and render users
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
    <td>${doc.data().pet}</td>
      <td>${doc.data().veterinario}</td>
      <td>${doc.data().vacina}</td>
      <td>${doc.data().data}</td>
      <td>${doc.data().proxima}</td>
      <td>${doc.data().observacoes}</td>
      <td>
        <button class="btn btn-edit">+</button>
        <button class="btn btn-delete">-</button>
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener('click', () => {
    editModal.classList.add('modal-show');

    id = doc.id;
    editModalForm.pet.value = doc.data().pet;
    editModalForm.veterinario.value = doc.data().veterinario;
    editModalForm.vacina.value = doc.data().vacina;
    editModalForm.data.value = doc.data().data;
    editModalForm.proxima.value = doc.data().proxima;
    editModalForm.observacoes.value = doc.data().observacoes;
  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener('click', () => {
    db.collection('users').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
  });

}

// Click add user button
btnAdd.addEventListener('click', () => {
  addModal.classList.add('modal-show');

  addModalForm.pet.value = '';
  addModalForm.veterinario.value = '';
  addModalForm.vacina.value = '';
  addModalForm.data.value = '';
  addModalForm.proxima.value = '';
  addModalForm.observacoes.value = '';
});

// User click anyware outside the modal
window.addEventListener('click', e => {
  if(e.target === addModal) {
    addModal.classList.remove('modal-show');
  }
  if(e.target === editModal) {
    editModal.classList.remove('modal-show');
  }
});

// Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     renderUser(doc);
//   })
// });

// Real time listener
db.collection('users').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})

// Click submit in add modal
addModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('users').add({
    pet: addModalForm.pet.value,
    veterinario: addModalForm.veterinario.value,
    vacina: addModalForm.vacina.value,
    data: addModalForm.data.value,
    proxima: addModalForm.proxima.value,
    observacoes: addModalForm.observacoes.value,
  });
  modalWrapper.classList.remove('modal-show');
});

// Click submit in edit modal
editModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('users').doc(id).update({
    pet: editModalForm.pet.value,
    veterinario: editModalForm.veterinario.value,
    vacina: editModalForm.vacina.value,
    data: editModalForm.data.value,
    proxima: editModalForm.proxima.value,
    observacoes: editModalForm.observacoes.value,
  });
  editModal.classList.remove('modal-show');
  
});