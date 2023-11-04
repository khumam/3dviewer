import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-screen w-screen bg-slate-600">
      <model-viewer class="w-screen h-screen z-10" id="main" src="/models/botchershop.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" camera-orbit="0deg 75deg 10.09m" field-of-view="30deg" auto-rotate>
        <button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-1" data-position="1.0583321641391858m 0.43086194371441566m -1.6032662292207862m" data-normal="-0.18638144495471184m 0.33960815845248865m 0.9219155360927069m" data-visibility-attribute="visible" data-orbit="-10.78deg 95.08deg 8.26m" data-fov="14.82deg" data-target="0.9m 0.96m 0.22m">
          <div class="HotspotAnnotation">Meat</didiv>
        </button>
      <button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-2" data-position="0.8021879494426714m 0.3887177070677839m 1.5240323449350768m" data-normal="-0.585566588855569m 0.05074176759487365m 0.8090346364880808m" data-visibility-attribute="visible" data-orbit="-163deg 108.3deg 5.54m" data-fov="12.06deg">
          <div class="HotspotAnnotation">Fish</div>
      </button><button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-3" data-position="1.9169951664345746m 1.9259207424228253m 0.10967070795447076m" data-normal="-0.05206778207067503m 0.998642172187754m -0.001660722242095804m" data-visibility-attribute="visible" data-orbit="-109deg 55.92deg 5.919m" ata-fov="13.76deg">
          <div class="HotspotAnnotation">Tend</div>
      </button>
      <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
      </div>
    </model-viewer>
    <div class="absolute left-10 top-10 z-0">
      <h1 class="text-6xl text-slate-500 mb-1">Model 3D Viewer</h1>
      <p class="text-slate-500">Ini adalah contoh sederhana dari model 3D yang diload. Untuk desain tampilan <br>bisa disesuaikan sesuai dengan kebutuhan</p>
      <p class="text-slate-500">Klik kanan pada model untuk reset kamera</p>
      <p class="text-slate-500">Klik pada anotasi untuk melihat detail</p>
    </div>
    <div class="absolute right-10 bottom-10 z-20 text-right">
      <p class="text-slate-500">Menggunakan library 3D Viewer dari google</p>
    </div>
  </div>
`
