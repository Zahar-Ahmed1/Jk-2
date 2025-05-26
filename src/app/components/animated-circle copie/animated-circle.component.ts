import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import gsap from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
@Component({
  selector: 'app-animated-circle',
  templateUrl: './animated-circle.component.html',
  styleUrls: ['./animated-circle.component.css'],
  standalone: true,
})
export class AnimatedCircleComponent implements AfterViewInit {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private points1!: THREE.Points;
  private points2!: THREE.Points;
  private points3!: THREE.Points;
  private points4!: THREE.Points;
  private geometries: THREE.BufferGeometry[] = [];
  private materials: THREE.PointsMaterial[] = [];
  private points: THREE.Points[] = [];
  private time = 0;

  private particles = 100;
  private radius = 2;

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container = this.canvasContainer.nativeElement;

    // Scène et caméra
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    const colors = [0xe91e63, 0x1c40a1, 0xe91e63, 0x1c40a1]; // 4 couleurs différentes pour chaque cercle
    const zOffsets = [0, 0.5, -0.5, 1]; // Décalage en profondeur (Z)

    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(this.particles * 3);

      for (let j = 0; j < this.particles; j++) {
        const angle = (j / this.particles) * Math.PI * 2;
        const randomZ = (Math.random() - 0.5) * 1.5;
        positions[j * 3] = Math.cos(angle) * (this.radius * (1 + i * 0.1));
        positions[j * 3 + 1] = Math.sin(angle) * (this.radius * (1 + i * 0.1));
        positions[j * 3 + 2] = randomZ + zOffsets[i];
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: colors[i], size: 0.07, transparent: true, opacity: 0.8 });
      const points = new THREE.Points(geometry, material);

      this.geometries.push(geometry);
      this.materials.push(material);
      this.points.push(points);
      this.scene.add(points);
    }

    // Animations des rotations
    gsap.to(this.points[0].rotation, { duration: 10, y: Math.PI * 2, repeat: -1, ease: 'linear' });
    gsap.to(this.points[1].rotation, { duration: 12, y: -Math.PI * 2, repeat: -1, ease: 'linear' });
    gsap.to(this.points[2].rotation, { duration: 14, y: Math.PI * 2, repeat: -1, ease: 'linear' });
    gsap.to(this.points[3].rotation, { duration: 16, y: -Math.PI * 2, repeat: -1, ease: 'linear' });

    this.animate();

    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  animate = () => {

    requestAnimationFrame(this.animate);

    this.time += 0.01;

    for (let i = 0; i < this.geometries.length; i++) {
      const positions = this.geometries[i].getAttribute('position').array as Float32Array;

      for (let j = 0; j < this.particles; j++) {
        const angle = (j / this.particles) * Math.PI * 2 + this.time;
        const zOffset = Math.sin(this.time + j * 0.1) * 0.5;

        positions[j * 3] = Math.cos(angle) * (this.radius * (1 + i * 0.1));
        positions[j * 3 + 1] = Math.sin(angle) * (this.radius * (1 + i * 0.1));
        positions[j * 3 + 2] = zOffset + (i * 0.5);
      }

      this.geometries[i].getAttribute('position').needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  };
}
