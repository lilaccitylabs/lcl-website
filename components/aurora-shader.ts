export const auroraVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const auroraFragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  // Palette — purples + warm lamp tones
  vec3 purple   = vec3(0.659, 0.333, 0.969); // #A855F7
  vec3 pink     = vec3(0.925, 0.282, 0.600); // #EC4899
  vec3 violet   = vec3(0.486, 0.227, 0.929); // #7C3AED
  vec3 amber    = vec3(0.95, 0.65, 0.15);    // warm lamp orange
  vec3 gold     = vec3(0.90, 0.78, 0.30);    // soft golden yellow
  vec3 dark     = vec3(0.035, 0.035, 0.043); // #09090B

  void main() {
    float t = uTime * 0.35;

    // Organic flowing UV distortion
    vec2 uv = vUv;
    float distort = sin(uv.x * 2.5 + t) * 0.12 + cos(uv.y * 2.0 - t * 0.8) * 0.12;
    uv += distort;

    // Time-based color mixing
    float w1 = sin(t + uv.x * 2.0) * 0.5 + 0.5;
    float w2 = cos(t * 0.8 + uv.y * 2.5) * 0.5 + 0.5;
    float w3 = sin(t * 1.2 + (uv.x + uv.y) * 1.5) * 0.5 + 0.5;
    float w4 = sin(t * 0.6 - uv.x * 1.8 + uv.y * 0.7) * 0.5 + 0.5;

    // Core = purples/pinks, edges = warm amber/gold
    vec3 coolColor = mix(purple, pink, w1);
    coolColor = mix(coolColor, violet, w2 * 0.6);

    vec3 warmColor = mix(amber, gold, w4);

    // Radial factor: 0 at center, 1 at edges
    float dist = length(vUv - 0.5) * 2.0;
    float edgeFactor = smoothstep(0.2, 0.9, dist);

    // Blend warm tones into edges
    vec3 color = mix(coolColor, warmColor, edgeFactor * 0.8);
    color = mix(color, dark, w3 * 0.2);

    // Vignette — fade to black at far edges
    float vignette = smoothstep(1.1, 0.1, dist);
    vignette = pow(vignette, 1.4);

    // Gentle pulse
    float pulse = 0.85 + 0.15 * sin(t * 0.5);

    gl_FragColor = vec4(color * vignette * pulse, 1.0);
  }
`;
