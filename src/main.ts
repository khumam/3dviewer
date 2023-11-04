import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="h-screen w-screen bg-slate-300">
      <model-viewer class="w-screen h-screen" id="main" src="/models/botchershop.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" camera-orbit="0deg 75deg 10.09m" field-of-view="30deg" auto-rotate>
        <button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-1" data-position="1.0583321641391858m 0.43086194371441566m -1.6032662292207862m" data-normal="-0.18638144495471184m 0.33960815845248865m 0.9219155360927069m" data-visibility-attribute="visible" data-orbit="-14.2deg 90.63deg 10.25m" data-fov="17.23deg">
          <div class="HotspotAnnotation">Meat</didiv>
        </button>
      <button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-2" data-position="0.8021879494426714m 0.3887177070677839m 1.5240323449350768m" data-normal="-0.585566588855569m 0.05074176759487365m 0.8090346364880808m" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Fish</div>
      </button><button class="Hotspot bg-slate-100 px-3 py-1 rounded" slot="hotspot-3" data-position="1.9169951664345746m 1.9259207424228253m 0.10967070795447076m" data-normal="-0.05206778207067503m 0.998642172187754m -0.001660722242095804m" data-visibility-attribute="visible">
          <div class="HotspotAnnotation">Tend</div>
      </button>
      <div class="progress-bar hide" slot="progress-bar">
          <div class="update-bar"></div>
      </div>
    </model-viewer>
  </div>
`
