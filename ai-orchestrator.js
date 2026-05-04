// محرك 3D Axis للذكاء الاصطناعي والأفاتار
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

async function initAvatar(containerId, modelPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById(containerId).appendChild(renderer.domElement);

    // إضافة الإضاءة للمجسم
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // تحميل الأفاتار الثلاثي الأبعاد (ملف walk.glb)
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
        const avatar = gltf.scene;
        avatar.scale.set(1, 1, 1); // ضبط الحجم
        scene.add(avatar);
        console.log("الأفاتار جاهز للعمل!");
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

// تشغيل الأفاتار تلقائياً عند تحميل الصفحة
window.onload = () => {
    // سيبحث الكود عن ملف walk.glb الذي رفعته مسبقاً
    initAvatar('avatar-container', '../walk.glb');
};
