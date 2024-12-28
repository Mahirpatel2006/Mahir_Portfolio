let renderer,
    camera,
    planet,
    moon,
    sphereBg,
    container = document.getElementById("canvas_container"),
    timeout_Debounce,
    frame = 0,
    cameraDx = 0.005, // Slower camera movement
    t = 0;

/* Star settings */
let lineTotal = 1000; // Number of stars
let linesGeometry = new THREE.BufferGeometry();
linesGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(3 * lineTotal), 3));  // Position only (no velocity needed)
let l_vertex_Array = linesGeometry.getAttribute("position").array;

init();
animate();

function init() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000"); // Dark theme
    scene.fog = new THREE.Fog("#000000", 0.5, 50);

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 1, 32);

    const pointLight1 = new THREE.PointLight("#ffffff", 1, 0);
    pointLight1.position.set(0, 30, 30);
    scene.add(pointLight1);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();

    // Planet
    const texturePlanet = loader.load("https://i.ibb.co/h94JBXy/saturn3-ljge5g.jpg");
    texturePlanet.anisotropy = 16;
    const planetGeometry = new THREE.SphereBufferGeometry(10, 50, 50);
    const planetMaterial = new THREE.MeshLambertMaterial({
        map: texturePlanet,
        fog: false,
    });
    planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.set(0, 8, -30);
    scene.add(planet);

    // Moon
    const textureMoon = loader.load("https://i.ibb.co/64zn361/moon-ndengb.jpg");
    textureMoon.anisotropy = 16;
    const moonGeometry = new THREE.SphereBufferGeometry(2, 32, 32);
    const moonMaterial = new THREE.MeshPhongMaterial({
        map: textureMoon,
        fog: false,
    });
    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(0, 8, 0);
    scene.add(moon);

    // Sphere Background
   // Sphere Background
const textureSphereBg = loader.load("https://i.ibb.co/JCsHJpp/stars2-qx9prz.jpg", function(texture) {
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); // Maximize anisotropy
    texture.magFilter = THREE.LinearFilter;  // Apply Linear filtering for better zoom clarity
    texture.minFilter = THREE.LinearFilter; // Disable mipmapping for sharp zoom
});
const geometrySphereBg = new THREE.SphereBufferGeometry(100, 64, 64); // Increase radius to 300 or larger
const materialSphereBg = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    map: textureSphereBg,
    fog: false,
});
sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
sphereBg.position.set(0, 50, 0); // Keep the background in the correct position
scene.add(sphereBg);

    // Stars - Creating stable stars with twinkling effect
    for (let i = 0; i < lineTotal; i++) {
        let x = THREE.MathUtils.randFloatSpread(200);
        let y = THREE.MathUtils.randFloatSpread(100);
        let z = THREE.MathUtils.randFloatSpread(300) - 50;

        l_vertex_Array[3 * i + 0] = x;
        l_vertex_Array[3 * i + 1] = y;
        l_vertex_Array[3 * i + 2] = z;
    }

    const starsMaterial = new THREE.PointsMaterial({
        color: "#ffffff",
        size: 0.2, // Size of stars
        transparent: true,
        opacity: 1.0, // Full opacity for the stars
    });

    const stars = new THREE.Points(linesGeometry, starsMaterial);
    scene.add(stars);

    // Store the scene for rendering in animate
    renderer.scene = scene;
}

function animate() {
    const scene = renderer.scene;

    // Planet rotation
    planet.rotation.y += 0.001;

    // Background sphere rotation
    sphereBg.rotation.y += 0.0005;

    // Moon animation
    moon.rotation.y -= 0.003;
    moon.rotation.x -= 0.003;
    moon.position.x = 15 * Math.cos(t);
    moon.position.z = 20 * Math.sin(t) - 35;
    t += 0.01;

    // Twinkling stars - Make the opacity fluctuate over time
    let time = Date.now() * 0.002;
    const stars = scene.children.find(child => child instanceof THREE.Points);
    if (stars) {
        const positions = stars.geometry.attributes.position.array;
        const material = stars.material;
        material.opacity = 0.5 + Math.sin(time) * 0.5;  // Make stars twinkle by changing opacity
    }

    // Camera movement
    camera.position.x += cameraDx;
    camera.lookAt(0, 0, 0);
    if (camera.position.x > 18 || camera.position.x < -18) cameraDx = -cameraDx;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

/* Resize */
window.addEventListener("resize", () => {
    clearTimeout(timeout_Debounce);
    timeout_Debounce = setTimeout(onWindowResize, 80);
});
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

/* Fullscreen Button */
let fullscreen = false;
let fsEnter = document.getElementById("fullscr");
fsEnter.addEventListener("click", (e) => {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    } else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});
