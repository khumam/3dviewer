import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-screen w-screen bg-slate-500 overflow-hidden">
      <model-viewer src="models/modern_cabinet_hutch.glb" id="main"  camera-controls poster="poster.webp" shadow-intensity="1" camera-orbit="205.4deg 65.83deg 6.499m" field-of-view="30deg" auto-rotate>
        <button class="Hotspot" slot="hotspot-1" data-position="-0.5145162338990419m 0.41505052882636306m -0.31457871198654175m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="384.9deg 117.8deg 3.885m" data-fov="14.27deg">
            <div class="HotspotAnnotation">Pintu 1</div>
        </button><button class="Hotspot" slot="hotspot-2" data-position="0.449320881554621m 0.3953379307526106m -0.32469967007637024m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="278.9deg 101.6deg 3.524m" data-fov="12.11deg">
            <div class="HotspotAnnotation">Pintu 2</div>
        </button><button class="Hotspot" slot="hotspot-3" data-position="-0.6796633651729138m 1.2114850746744334m 0.054240405559539795m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="411.5deg 82.72deg 3.524m" data-fov="12deg">
            <div class="HotspotAnnotation">Rak 1</div>
        </button><button class="Hotspot" slot="hotspot-4" data-position="0.681243928085963m 1.240996544734097m 0.03012874722480774m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="282.3deg 78.07deg 3.524m" data-fov="12deg">
            <div class="HotspotAnnotation">Rak 2</div>
        </button><button class="Hotspot" slot="hotspot-5" data-position="-0.49684616083790933m 1.655443129812292m 0.054240405559539795m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="411.5deg 82.72deg 3.532m" data-fov="12deg">
            <div class="HotspotAnnotation">Another pintu</div>
        </button><button class="Hotspot" slot="hotspot-6" data-position="0.5731263573143415m 1.8149472660958539m 0.05424040555953891m" data-normal="0m 0m -1m" data-visibility-attribute="visible" data-orbit="281.7deg 77.54deg 3.524m" data-fov="12deg">
            <div class="HotspotAnnotation">Another pintu</div>
        </button><button class="Hotspot" slot="hotspot-7" data-position="-0.13002657777743565m 1.7207092046737675m 0.07993318062153865m" data-normal="0m 1m 0m" data-visibility-attribute="visible" data-orbit="355deg 74.9deg 3.524m" data-fov="12deg">
            <div class="HotspotAnnotation">Botol</div>
        </button>
        <div class="progress-bar hide" slot="progress-bar">
            <div class="update-bar"></div>
        </div>
    </model-viewer>
    <div class="absolute left-10 top-10 z-0">
      <h1 class="text-6xl text-slate-300 mb-1">Model 3D Viewer</h1>
      <p class="text-slate-300">Ini adalah contoh sederhana dari model 3D yang diload. Untuk desain tampilan <br>bisa disesuaikan sesuai dengan kebutuhan</p>
      <p class="text-slate-300">Klik kanan pada model untuk reset kamera</p>
      <p class="text-slate-300">Klik pada anotasi untuk melihat detail</p>
    </div>
    <div class="absolute right-10 bottom-10 z-20 text-right">
      <p class="text-slate-300">Menggunakan library 3D Viewer dari google</p>
    </div>
  </div>
`
