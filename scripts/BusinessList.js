import {useBusinesses} from "./BusinessProvider.js"
import {businessFormat} from "./Business.js"

const contentElement = document.querySelector(".activeBusinessList")

export const listedBusinesses = () => {
    const businessesArray = useBusinesses();
    contentElement.innerHTML = "<h1>Active Businesses</h1>"
console.log("am i working here?")
    businessesArray.forEach(
        (businessObject) => {
            contentElement.innerHTML += businessFormat(businessObject)
        }
    );
}