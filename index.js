// window.onload = function () {
//   window.location.href = "biolytica://app/client/profile'";
// };
const output = document.getElementById('output');
const queryParams = document.getElementById("queryParams");

const { search } = new URL(window.location.href.replace("#/", ""));
const urlParams = new URLSearchParams(search);
const redirectFrom = urlParams.get("redirectFrom") || "";
const redirectTo = urlParams.get("redirectTo") || "";
const device = urlParams.get("device") || "";
const isGeneric = urlParams.get("isGeneric") || "";

console.log("urlParams", urlParams);

console.log("device", device);


const imgElement = document.createElement("img");

// Set the src and other attributes for the image
imgElement.src = `${device}.png`; // Replace with your image path
imgElement.alt = "Descriptive text"; // Optional
imgElement.width = 200; // Optional: Set width
imgElement.height = 200; // Optional: Set height

// Append the img element to the div
output.appendChild(imgElement);


queryParams.innerHTML = `device - ${device}`;




