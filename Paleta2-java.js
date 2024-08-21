const palettes = [
    {
        name: "Paleta 1",
        colors: [
            { name: "Verde Menta", hex: "#A8E6CF", meaning: "(Frescura y vitalidad)", reason: "El verde menta es suave y refrescante, evocando la naturaleza y la salud." },
            { name: "Azul Pastel", hex: "#D0E1F9", meaning: "(Calma y serenidad)", reason: "El azul pastel es calmante y relajante, promoviendo la paz mental." },
            { name: "Amarillo Pastel", hex: "#FFF9C4", meaning: "(Alegría y optimismo)", reason: "El amarillo pastel es cálido y alegre, simbolizando la felicidad y el optimismo." },
            { name: "Naranja Pastel", hex: "#FFE0B2", meaning: "(Energía y calidez)", reason: "El naranja pastel es suave y cálido, promoviendo la energía y la creatividad." },
            { name: "Rosa Pastel", hex: "#F8BBD0", meaning: "(Amor y ternura)", reason: "El rosa pastel es suave y acogedor, simbolizando el amor y la compasión." }
        ]
    },
    {
        name: "Paleta 2",
        colors: [
            { name: "Lavanda", hex: "#E1BEE7", meaning: "(Espiritualidad y paz)", reason: "El lavanda es suave y calmante, simbolizando la espiritualidad y la paz." },
            { name: "Verde Claro", hex: "#C8E6C9", meaning: "(Equilibrio y armonía)", reason: "El verde claro simboliza la naturaleza y el equilibrio, promoviendo una sensación de armonía y bienestar." },
            { name: "Azul Claro", hex: "#B3E5FC", meaning: "(Tranquilidad y relajación)", reason: "El azul claro evoca la calma del cielo y el mar, promoviendo la tranquilidad y la relajación." },
            { name: "Amarillo Suave", hex: "#FFF59D", meaning: "(Energía y alegría)", reason: "El amarillo suave es cálido y acogedor, promoviendo la energía y la alegría." },
            { name: "Naranja Suave", hex: "#FFCCBC", meaning: "(Calidez y energía)", reason: "El naranja suave es cálido y acogedor, simbolizando la calidez y la energía." }
        ]
    },
    {
        name: "Paleta 3",
        colors: [
            { name: "Violeta Pastel", hex: "#D1C4E9", meaning: "(Creatividad y inspiración)", reason: "El violeta pastel es suave y calmante, promoviendo la creatividad y la inspiración." },
            { name: "Verde Lima", hex: "#DCEDC8", meaning: "(Energía y vitalidad)", reason: "El verde lima es vibrante y lleno de energía, simbolizando la vitalidad y el crecimiento." },
            { name: "Azul Marino Suave", hex: "#C5CAE9", meaning: "(Confianza y estabilidad)", reason: "El azul marino suave simboliza la confianza y la estabilidad, proporcionando una base sólida para la salud mental." },
            { name: "Amarillo Claro", hex: "#FFF9C4", meaning: "(Felicidad y optimismo)", reason: "El amarillo claro es brillante y alegre, simbolizando la felicidad y el optimismo." },
            { name: "Rosa Suave", hex: "#F8BBD0", meaning: "(Dulzura y serenidad)", reason: "El rosa suave es cálido y acogedor, promoviendo la dulzura y la serenidad." }
        ]
    },
    {
        name: "Paleta 4",
        colors: [
            { name: "Morado Claro", hex: "#E1BEE7", meaning: "(Calma y serenidad)", reason: "El morado claro es suave y calmante, promoviendo la calma y la serenidad." },
            { name: "Verde Bosque Suave", hex: "#C8E6C9", meaning: "(Crecimiento y renovación)", reason: "El verde bosque suave representa el crecimiento y la renovación, fundamentales para una vida saludable." },
            { name: "Azul Pastel", hex: "#BBDEFB", meaning: "(Paz y claridad)", reason: "El azul pastel es suave y calmante, promoviendo la paz y la claridad mental." },
            { name: "Amarillo Suave", hex: "#FFF176", meaning: "(Energía y alegría)", reason: "El amarillo suave es cálido y acogedor, promoviendo la energía y la alegría." },
            { name: "Naranja Pastel", hex: "#FFE0B2", meaning: "(Calidez y energía)", reason: "El naranja pastel es suave y cálido, simbolizando la calidez y la energía." }
        ]
    },
    {
        name: "Paleta 5",
        colors: [
            { name: "Púrpura Pastel", hex: "#E1BEE7", meaning: "(Transformación y intuición)", reason: "El púrpura pastel es suave y calmante, promoviendo la transformación y la intuición." },
            { name: "Verde Oliva Suave", hex: "#C5E1A5", meaning: "(Equilibrio y armonía)", reason: "El verde oliva suave representa la paz y la estabilidad, esenciales para el bienestar." },
            { name: "Azul Claro", hex: "#B3E5FC", meaning: "(Tranquilidad y relajación)", reason: "El azul claro evoca la calma del cielo y el mar, promoviendo la tranquilidad y la relajación." },
            { name: "Amarillo Pastel", hex: "#FFF9C4", meaning: "(Calidez y ternura)", reason: "El amarillo pastel es suave y cálido, simbolizando la ternura y el cuidado." },
            { name: "Rosa Pastel", hex: "#F8BBD0", meaning: "(Dulzura y serenidad)", reason: "El rosa pastel es cálido y acogedor, promoviendo la dulzura y la serenidad." }
        ]
    },
    {
        name: "Paleta 6",
        colors: [
            { name: "Morado Oscuro Suave", hex: "#D1C4E9", meaning: "(Misterio y profundidad)", reason: "El morado oscuro suave es profundo y misterioso, simbolizando el misterio y la profundidad." },
            { name: "Verde Claro", hex: "#A8E6CF", meaning: "(Equilibrio y armonía)", reason: "El verde claro simboliza la naturaleza y el equilibrio, promoviendo una sensación de armonía y bienestar." },
            { name: "Azul Turquesa Pastel", hex: "#B2EBF2", meaning: "(Claridad y frescura)", reason: "El azul turquesa pastel es refrescante y claro, simbolizando la frescura y la claridad mental." },
            { name: "Amarillo Claro", hex: "#FFF9C4", meaning: "(Felicidad y optimismo)", reason: "El amarillo claro es brillante y alegre, simbolizando la felicidad y el optimismo." },
            { name: "Naranja Suave", hex: "#FFCCBC", meaning: "(Fuerza y determinación)", reason: "El naranja suave es cálido y acogedor, simbolizando la fuerza y la determinación." }
        ]
    }
];

const container = document.getElementById('color-container');

palettes.forEach((palette, index) => {
    const paletteColumn = document.createElement('div');
    paletteColumn.className = 'palette';

    const paletteLabel = document.createElement('div');
    paletteLabel.className = 'palette-label';
    paletteLabel.textContent = `Paleta ${index + 1}`;
    paletteColumn.appendChild(paletteLabel);

    palette.colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.hex;

        const colorInfo = document.createElement('div');
        colorInfo.className = 'color-info';
        colorInfo.innerHTML = `<p>${color.name}</p><p>${color.meaning}</p><p>${color.reason}</p>`;

        colorBox.appendChild(colorInfo);

        colorBox.addEventListener('click', () => {
            if (colorBox.classList.contains('expanded')) {
                colorBox.classList.remove('expanded');
            } else {
                document.querySelectorAll('.color-box').forEach(box => box.classList.remove('expanded'));
                colorBox.classList.add('expanded');
            }
        });

        paletteColumn.appendChild(colorBox);
    });

    container.appendChild(paletteColumn);
});
