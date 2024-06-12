const btnSaveEmpElm = document
    .querySelector("#btn-save");

const txtIdElm = document
    .querySelector("#txtID");

const txtNameElm = document
    .querySelector("#txtName");

const txtAddressElm = document
    .querySelector("#txtAddress");

const txtContactElm = document
    .querySelector("#txtContact");

const tblBodyContainerElm = document
    .querySelector("#tbl-body-container");

const noDataElm = document
    .querySelector("#no-data");


btnSaveEmpElm.addEventListener('click',
    (e) => {
        e.preventDefault();
        const id = txtIdElm.value.trim();
        const name = txtNameElm.value.trim();
        const address = txtAddressElm.value.trim();
        const contact = txtContactElm.value.trim();

        if (!(id && name && address && contact)) {
            return;
        }

        if (tblBodyContainerElm.contains(noDataElm)) {
            noDataElm.remove();
        }

        const trElm = document
            .createElement("tr");

        const tdIdElm = document
            .createElement("td");

        const tdNameElm = document
            .createElement("td");

        const tdAddressElm = document
            .createElement("td");

        const tdContactElm = document
            .createElement("td");

        const tdIconElm = document
            .createElement("td");

        const iElm = document
            .createElement("i");

        tdIdElm.textContent = id;
        tdNameElm.textContent = name;
        tdAddressElm.textContent = address;
        tdContactElm.textContent = contact;

        tdIconElm.append(iElm);
        trElm.append(tdIdElm, tdNameElm, tdAddressElm, tdContactElm, tdIconElm);

        iElm.setAttribute("class", "bi bi-trash3");

        tblBodyContainerElm.append(trElm);

        txtIdElm.value = "";
        txtNameElm.value = "";
        txtAddressElm.value = "";
        txtContactElm.value = "";
        txtIdElm.focus();

    });

tblBodyContainerElm.addEventListener('click',
    (e) => {
        if (e.target.getAttribute("class") === "bi bi-trash3") {
                e.target.parentElement.parentElement.remove();
                if (!tblBodyContainerElm.children.length) {
                        tblBodyContainerElm.append(noDataElm);
                }
        }
});

