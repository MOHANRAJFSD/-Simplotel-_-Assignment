let clickBtnEl = document.getElementById("clickBtn");
let backgroundContainerEl = document.getElementById("backgroundContainer");

function createandAppend() {
    let contentContainerEl = document.createElement("div");
    contentContainerEl.classList.add("contentContainerEl");
    backgroundContainerEl.appendChild(contentContainerEl);

    let imageContentContainer = document.createElement("div");
    imageContentContainer.classList.add("imageContentContainer");
    contentContainerEl.appendChild(imageContentContainer);

    let imageContainer1 = document.createElement("div");
    imageContainer1.classList.add("imageContainer");
    imageContentContainer.appendChild(imageContainer1);

    let imageEl1 = document.createElement('img');
    imageEl1.classList.add("imageEl1");
    imageEl1.src = "https://res.cloudinary.com/dxqnpbizj/image/upload/v1705930297/stage.jpg";
    imageContainer1.appendChild(imageEl1);

    let imageEl2 = document.createElement('img');
    imageEl2.classList.add("imageEl2");
    imageEl2.src = "https://res.cloudinary.com/dxqnpbizj/image/upload/v1705930261/streeet.jpg";
    imageContainer1.appendChild(imageEl2);

    let imageContainer2 = document.createElement("div");
    imageContainer2.classList.add("imageContainer");
    imageContentContainer.appendChild(imageContainer2);

    let imageEl3 = document.createElement('img');
    imageEl3.classList.add("imageEl3");
    imageEl3.src = "https://res.cloudinary.com/dxqnpbizj/image/upload/v1705930278/food%20on%20table.jpg";
    imageContainer2.appendChild(imageEl3);

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");
    contentContainerEl.appendChild(contentContainer);

    let content = document.createElement("div");
    content.classList.add("content");
    contentContainer.appendChild(content);

    let contentPara = document.createElement("p");
    contentPara.textContent = "LOREM IPSUM";
    content.appendChild(contentPara);

    let contentHeading1 = document.createElement("h");
    contentHeading1.textContent = "LOREM IPSUM";
    contentHeading1.classList.add("contentHeading");
    content.appendChild(contentHeading1);

    let brEl = document.createElement("br");
    content.appendChild(brEl);

    let contentHeading2 = document.createElement("h");
    contentHeading2.textContent = "SET ADEMIR";
    contentHeading2.classList.add("contentHeading");
    content.appendChild(contentHeading2);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");
    content.appendChild(iconContainer);

    let iconPara = document.createElement("p");
    iconPara.textContent = "Click";
    iconContainer.appendChild(iconPara);

    let icon = document.createElement("i");
    icon.classList.add("icon");
    iconContainer.appendChild(icon);
}
clickBtnEl.addEventListener("click", () => {
    backgroundContainerEl.textContent = "";
    backgroundContainerEl.classList.add("newbg");
    createandAppend();
})