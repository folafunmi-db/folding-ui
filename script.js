console.clear();
const elApp = document.querySelector('#app');

function activate(state) {
    elApp.dataset.state = state;

    document.querySelectorAll(`[data-active]`).forEach(el => delete el.dataset.active);
    document.querySelectorAll(`[data-view="${state}"]`).forEach(el => el.dataset.active = true);

}

activate('details');