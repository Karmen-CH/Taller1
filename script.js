document.addEventListener("DOMContentLoaded", function () {
    const planetButtons = document.querySelectorAll(".planet-button");
    const object = document.getElementById("object");
    const simulation = document.getElementById("simulation")

    function startFreeFall(planetName) {
        const planetsImages = {
            mercurio: "./img/mercurio.png",
            venus: "./img/venus.png",
            tierra: "./img/tierra.png",
            marte: "./img/marte.png",
            jupiter: "./img/jupiter.png",
            urano: "./img/urano.png",
            saturno: "./img/saturno.png",
            luna: "./img/luna.png",
            neptuno: "./img/neptuno.png"
        }
        const gravity = getGravity(planetName);
        const image = planetsImages[planetName]

        console.log(gravity)
        let distance = 0;
        let time = 0;
        const interval = 20;

        const fallAnimation = setInterval(() => {
            time += interval / 1000;
            distance = 0.5 * gravity * time * time;
            object.style.top = distance + "px";
            object.style.backgroundImage = `url(${image})`

            if (distance >= 850) {
                clearInterval(fallAnimation);
                setTimeout(() => {
                    object.style.bottom = "0";
                }, 1000);
            }
        }, interval);
    }

    function getGravity(planetName) {
        const gravityValues = {
            mercurio: 3.7,
            venus: 8.87,
            tierra: 9.81,
            marte: 3.71,
            jupiter: 24.79,
            urano: 13,
            saturno: 10.9 ,
            luna: 5.6,
            neptuno: 50.2
        };
        return gravityValues[planetName] || 0;
    }

    // Agregar eventos a los botones del planeta para iniciar la caída
    planetButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedPlanet = button.getAttribute("data-planet");
            simulation.style.display = "block"
            console.log(selectedPlanet);
            startFreeFall(selectedPlanet);
        });
    });
});
