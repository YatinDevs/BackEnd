function calcTotal() {
  const priceElements = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;

  priceElements.forEach((element) => {
    total = total + parseInt(element.textContent);
  });

  // --------------------
  const previousTableRow = document.querySelector(
    '[data-ns-test="grandTotal"]'
  );
  if (previousTableRow) {
    previousTableRow.parentElement.remove();
  }

  const tableBody = document.querySelector("tbody");
  const tableRowGrandTotal = document.createElement("tr");

  tableRowGrandTotal.innerHTML = `
     <td>Grand Total</td>
     <td data-ns-test="grandTotal">${total}</td>
     `;

  tableBody.appendChild(tableRowGrandTotal);
}
