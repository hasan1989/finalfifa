function defendDone() {
    const goru = document.getElementById("defendingid");
    goru.style.display = 'block';
    goru.style.display = 'flex';
    
    
    const mar = document.getElementById("goals");
    mar.style.display = 'none';

    const pida = document.getElementById("passes");
    pida.style.display = 'none';

    const kila = document.getElementById("passaccuracyid");
    kila.style.display = 'none';

    const ushta = document.getElementById("attemptid");
    ushta.style.display = 'none';

    const alu = document.getElementById("setplayid");
    alu.style.display = 'none';

    const piaj = document.getElementById("disciplineid");
    piaj.style.display = 'none';

    const dhor = document.getElementById("possession");
    dhor.style.display = 'none';
}
