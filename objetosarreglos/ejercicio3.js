const estudiantes = [
    {
        nombre: "Juan García",
        edad: 20,
        materias: [
            { nombre: "Matemáticas", nota: 8.5 },
            { nombre: "Programación", nota: 9.2 },
            { nombre: "Física", nota: 7.8 }
        ]
    },
    {
        nombre: "María López",
        edad: 19,
        materias: [
            { nombre: "Matemáticas", nota: 9.1 },
            { nombre: "Programación", nota: 8.9 },
            { nombre: "Física", nota: 8.6 }
        ]
    },
    {
        nombre: "Carlos Rodríguez",
        edad: 21,
        materias: [
            { nombre: "Matemáticas", nota: 7.4 },
            { nombre: "Programación", nota: 8.1 },
            { nombre: "Física", nota: 7.9 }
        ]
    }
];

// Procesar estudiantes y calcular promedios
estudiantes.forEach(estudiante => {
    const sumNotas = estudiante.materias.reduce((suma, materia) => suma + materia.nota, 0);
    const promedio = (sumNotas / estudiante.materias.length).toFixed(2);
    
    console.log(`${estudiante.nombre}: ${promedio}`);
});

