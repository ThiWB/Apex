
function submitRiskArea() {
    
    const address = document.getElementById("incidentAdress").value;
    const hour = document.getElementById("incidentHour").value;
    const type = document.getElementById("incidentType").value;
    const description = document.getElementById("riskDescription").value;

    
    const riskArea = {
        address: address,
        hour: hour,
        type: type,
        description: description
    };

    
    let riskAreas = JSON.parse(localStorage.getItem("riskAreas")) || [];
    
    
    riskAreas.push(riskArea);
    
    
    localStorage.setItem("riskAreas", JSON.stringify(riskAreas));

    
    document.getElementById("incidentAdress").value = "";
    document.getElementById("incidentHour").value = "";
    document.getElementById("incidentType").value = "";
    document.getElementById("riskDescription").value = "";

    
    window.location.href = "RiskAreas.html";
}


function loadRiskAreas() {
    const riskAreasList = document.getElementById("riskAreasList");
    const riskAreas = JSON.parse(localStorage.getItem("riskAreas")) || [];
    
    
    riskAreas.forEach(area => {
        const listItem = document.createElement("li");
        listItem.textContent = `${area.address} - ${area.hour} - ${area.type}: ${area.description}`;
        riskAreasList.appendChild(listItem);
    });
}


if (window.location.pathname.includes("RiskAreas.html")) {
    loadRiskAreas();
}

function clearRiskAreas() {
    localStorage.removeItem("riskAreas");
}