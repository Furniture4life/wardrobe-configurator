// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Add basic lighting
const light = new THREE.AmbientLight(0x404040);
scene.add(light);

// Create the wardrobe model
const geometry = new THREE.BoxGeometry(1, 2, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const wardrobe = new THREE.Mesh(geometry, material);
scene.add(wardrobe);

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Color picker event listener
document.getElementById('colorPicker').addEventListener('input', (event) => {
  const color = event.target.value;
  wardrobe.material.color.set(color);
});
