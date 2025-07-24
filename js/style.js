function showPanel(panelId, button) {
     
    // Affichage du  bon contenu
  const panels = document.querySelectorAll('.toggle');
  panels.forEach(toggle => toggle.classList.remove('active'));
  document.getElementById(panelId).classList.add('active');

  // Met à jour l'état actif des boutons
  const buttons = document.querySelectorAll('.container_button .btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}