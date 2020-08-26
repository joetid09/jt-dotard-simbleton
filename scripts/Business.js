export const businessFormat = (businessObject) => {
    return `
    <section class= "listOfBusiness">
        <h2>${businessObject.companyName}</h2>
            <div class ="streetName">${businessObject.addressFullStreet}</div>
            <div class ="cityStateZip">
                ${businessObject.addressCity}, ${businessObject.addressStateCode}${businessObject.addressZipCode}
            </div>
    </section>`
}