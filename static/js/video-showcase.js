(function () {
  var effects = [
      {
          "name": "BlueGreenBouncingExplosion",
          "video": "./videos_with_desc/BlueGreenBouncingExplosion/BlueGreenBouncingExplosion.mp4",
          "description": "The explosion ejects blue and green particles, which bounce multiple times after colliding with the ground. Both blue and green appear in varying shades."
      },
      {
          "name": "GoldenWhiteProjectile_FireworkBurst",
          "video": "./videos_with_desc/GoldenWhiteProjectile_FireworkBurst/GoldenWhiteProjectile_FireworkBurst.mp4",
          "description": "A bright golden-white projectile launches upward from the ground with moderate speed, tracing a thin sparkling trail of tiny orange embers that detach and fade behind it. After rising a short distance, the projectile reaches its apex and suddenly bursts into a dense spherical cluster of hundreds of tiny glittering particles in vivid red, orange, and yellow. The sphere expands outward gracefully, slows down, and hangs briefly in the air. After a moment, the particles begin to curve gently downward under gravity, their brightness gradually dimming and their colors softening to pale gold. The outermost particles fade first, while the core lingers, until the entire cluster dissipates completely against the dark sky."
      },
      {
          "name": "Horizontal_Gravity_LightBlob_Stream",
          "video": "./videos_with_desc/Horizontal_Gravity_LightBlob_Stream/Horizontal_Gravity_LightBlob_Stream.mp4",
          "description": "Random-colored light blobs continuously emitted horizontally, falling under gravity. These light blobs shoot outward at a horizontal conical angle, initially forming a concentrated stream of particles. As they move forward, the blobs follow a downward parabolic path as they are subjected to gravity. Finally, the light blobs dim and fade away completely while still in motion. Only random colors."
      },
      {
          "name": "MagicSphereExplosion_VioletTurquoiseSmoke",
          "video": "./videos_with_desc/MagicSphereExplosion_VioletTurquoiseSmoke/MagicSphereExplosion_VioletTurquoiseSmoke.mp4",
          "description": "A sudden explosion of violet and turquoise glowing particles bursting outward from a magical sphere, swirling in chaotic motion before fading into smoke."
      },
      {
          "name": "MidairCloudDropAndGroundSpread",
          "video": "./videos_with_desc/MidairCloudDropAndGroundSpread/MidairCloudDropAndGroundSpread.mp4",
          "description": "Dense masses of clouds continuously generate with a fade-in effect inside a small short cylindrical area in midair, then drift downward. Upon hitting the ground, they spread outward horizontally (parallel to the ground) to approximately three times their original diameter. The ground clouds then fade out at a medium speed."
      },
      {
          "name": "NS_BlackGas_Tornado",
          "video": "./videos_with_desc/NS_BlackGas_Tornado/NS_BlackGas_Tornado.mp4",
          "description": "Large masses of black gas rises from a ground point while spinning quickly around its vertical axis. As it ascends, it is gradually flung outward, creating a funnel-shaped tornado that flares from narrow at the base to wide at the top."
      },
      {
          "name": "NS_ColorBurst_With_WhiteTrails_And_CyanGlitterFollowup",
          "video": "./videos_with_desc/NS_ColorBurst_With_WhiteTrails_And_CyanGlitterFollowup/NS_ColorBurst_With_WhiteTrails_And_CyanGlitterFollowup.mp4",
          "description": "Numerous glowing random color light blobs burst from a central point, expanding outward in a spherical formation at high speed. Each blob leaves behind a small, thin, bright ribbon-like trail with medium persistence. The early burst feels rich and energetic, with a clearly increased particle count compared to a sparse effect. After the trails disappear, the original random color blobs gradually fade away. Then new glittering light blobs appear, electric cyan or blue cyan in color, more elegant and visually striking than the original ones, and slightly larger. They spawn exactly at the same positions where the random color blobs faded. They do not continue the fast outward motion. Instead, each light blob drifts from its spawn point in a random direction, with the drift amplitude increasing over time, lasting about three seconds. They sparkle intensely, shimmer with fine glittering detail, and then gradually fade out."
      },
      {
          "name": "NS_ColorfulFallingGlitterStars",
          "video": "./videos_with_desc/NS_ColorfulFallingGlitterStars/NS_ColorfulFallingGlitterStars.mp4",
          "description": "Generate a particle effect where stars rotate and drift down within a square boundary. Each star has a different color, colorful and glittering. Each star gradually fades out at the end of its life."
      },
      {
          "name": "NS_Colorful_Firework_GlitterBurst",
          "video": "./videos_with_desc/NS_Colorful_Firework_GlitterBurst/NS_Colorful_Firework_GlitterBurst.mp4",
          "description": "A colorful firework effect. Each time, 5 glittering particles shoot upward. After rising, they explode midair, releasing a burst of droplet-shaped bright spots that form a circular shape. Each particle has a random color, creating a vibrant, glowing effect. "
      },
      {
          "name": "NS_FireRain_Skill",
          "video": "./videos_with_desc/NS_FireRain_Skill/NS_FireRain_Skill.mp4",
          "description": "This is a Fire Rain skill effect. Red light orbs are continuously spawned densely from mid-air at the same height within a small circle range. The orbs fall downward, trailing short orange-red ribbons that taper into very thin tails. Upon colliding with the ground, the orbs explode outward into multiple tiny orange bright sparks that are also affected by gravity, gradually fading out over time."
      },
      {
          "name": "NS_Fireball_From_Multiple_Burning_Fires",
          "video": "./videos_with_desc/NS_Fireball_From_Multiple_Burning_Fires/NS_Fireball_From_Multiple_Burning_Fires.mp4",
          "description": "Multiple burning fire form a fire ball."
      },
      {
          "name": "NS_Firework_ConeBurst_SparkTrail",
          "video": "./videos_with_desc/NS_Firework_ConeBurst_SparkTrail/NS_Firework_ConeBurst_SparkTrail.mp4",
          "description": "Firework effect: each time, randomly emit 1 to 3 particles upward in a cone shape. Then each particle bursts outward in all directions into a circular shape, leaving a sparkling trail."
      },
      {
          "name": "NS_Firework_Orange_TrailBurst",
          "video": "./videos_with_desc/NS_Firework_Orange_TrailBurst/NS_Firework_Orange_TrailBurst.mp4",
          "description": "This fireworks effect begins with an orange light blob shooting straight upward quickly. When its momentum is near zero, it explodes into a dense burst. Many smaller light blobs blast outward from the center, forming a sphere and leaving bright orange trails as they fall in arcing paths. As they descend, these trailing blobs gradually dim, break apart, and fade away completely.\r\n"
      },
      {
          "name": "NS_Fireworks_GoldenLightBlobField",
          "video": "./videos_with_desc/NS_Fireworks_GoldenLightBlobField/NS_Fireworks_GoldenLightBlobField.mp4",
          "description": "This is a continuous fireworks-like effect composed of light blobs. Golden light blobs are emitted from a plane approximately 1000 units in size. They rise upward at random speeds and in different directions, then burst into large, dense spherical explosions of shinning and glowing Golden light blobs. After each burst, the light blobs continue to spread outward, gradually lose momentum, and then fade away. "
      },
      {
          "name": "NS_FlameSmoke_RingExplosion",
          "video": "./videos_with_desc/NS_FlameSmoke_RingExplosion/NS_FlameSmoke_RingExplosion.mp4",
          "description": "This is a flame and smoke explosion that forms a distinct ring shape around a central axis. The ring is parallel to the ground."
      },
      {
          "name": "NS_FountainLikeFirework_GreenToBlue",
          "video": "./videos_with_desc/NS_FountainLikeFirework_GreenToBlue/NS_FountainLikeFirework_GreenToBlue.mp4",
          "description": "This is a fountain-like firework. Glittering green blob particles are sprayed upward in a cone-shaped area with trail and fall down under gravity. The particles turn into glittering blue when it drops."
      },
      {
          "name": "NS_FountainLike_Firework",
          "video": "./videos_with_desc/NS_FountainLike_Firework/NS_FountainLike_Firework.mp4",
          "description": "This is a fountain-like firework. Slightly gleaming colorful blob particles are sprayed upward in a wide-angle cone-shaped area and fall down under gravity. The particle colors change and fade out with time."
      },
      {
          "name": "NS_FountainLike_Orange_Firework",
          "video": "./videos_with_desc/NS_FountainLike_Orange_Firework/NS_FountainLike_Orange_Firework.mp4",
          "description": "A fountain-like orange firework effect, with bright particles shooting upward from the center in a cone shape, then affected by gravity and colliding with the ground, producing sparks at the point of impact."
      },
      {
          "name": "NS_FountainType_Firework",
          "video": "./videos_with_desc/NS_FountainType_Firework/NS_FountainType_Firework.mp4",
          "description": "This is a fountain-type firework. Colorful and bright particles are sprayed upward in a cone-shaped area and fall down under gravity."
      },
      {
          "name": "NS_GlitteringCyanBlueBeam",
          "video": "./videos_with_desc/NS_GlitteringCyanBlueBeam/NS_GlitteringCyanBlueBeam.mp4",
          "description": "A glittering white cluster of particles continuously emits a large number of glittering cyan-blue particles in a horizontal direction, forming a beam."
      },
      {
          "name": "NS_GlitteringOrangeBlob_RingOrbit",
          "video": "./videos_with_desc/NS_GlitteringOrangeBlob_RingOrbit/NS_GlitteringOrangeBlob_RingOrbit.mp4",
          "description": "Glittering orange blob continuously generated from a ground ring, floating upward and rotate around the ring axis. "
      },
      {
          "name": "NS_GlitteringPurpleSphereVolume",
          "video": "./videos_with_desc/NS_GlitteringPurpleSphereVolume/NS_GlitteringPurpleSphereVolume.mp4",
          "description": "Within a spherical volume, a moderate number of glittering purple particles are generated, flickering over time and with slight perturbations."
      },
      {
          "name": "NS_GlowingRing_SpiralShimmers",
          "video": "./videos_with_desc/NS_GlowingRing_SpiralShimmers/NS_GlowingRing_SpiralShimmers.mp4",
          "description": "Generate a medium-sized glowing ring parallel to the ground. Above the ring, there are shimmering elongated light particles that swirl upward in a spiral motion and gradually fade out as they rise."
      },
      {
          "name": "NS_GroundFireworks_GreenTrails_RedBlueApexBurst",
          "video": "./videos_with_desc/NS_GroundFireworks_GreenTrails_RedBlueApexBurst/NS_GroundFireworks_GreenTrails_RedBlueApexBurst.mp4",
          "description": "This continuous ground-emitted fireworks effect has light green blobs rising rapidly from the ground in different directions, leaving ribbon‑like trails behind them. As each blob where its speed reaches zero, it produces a fireworks‑like effect: a deep red inner spherical explosion and a deep blue outer spherical explosion. Both explosions are composed entirely of numerous glittering light blobs."
      },
      {
          "name": "NS_GroundFireworks_TripleConcentricBurst",
          "video": "./videos_with_desc/NS_GroundFireworks_TripleConcentricBurst/NS_GroundFireworks_TripleConcentricBurst.mp4",
          "description": "Flickering white blobs rise rapidly from the ground in different directions, leaving ribbon-like trails. Each climbs high until it stops at the apex, then produces three concentric spherical explosions: deep red being the smallest, fewest, and densest; red being wider with more blobs; and light red being the broadest, most numerous, and most diffuse. The three bursts expand together, hang briefly, then droop and fade."
      },
      {
          "name": "NS_Healing_Ring_CrossRise",
          "video": "./videos_with_desc/NS_Healing_Ring_CrossRise/NS_Healing_Ring_CrossRise.mp4",
          "description": "This healing effect begins with a pale-yello glowing horizontal ring. Cross-shaped green light particles continuously spawn from within the ring, rising gently upward vertically without rotation. The radius where cross particles are spawned is almost the same with the ring. Accompanying them, several short, thin vertical streaks of light flash upwards from the base of the ring. As the cross shapes rise, they gradually shrink and fade away before disappearing completely."
      },
      {
          "name": "NS_Horizontal_Explosion_Smoke_Ring",
          "video": "./videos_with_desc/NS_Horizontal_Explosion_Smoke_Ring/NS_Horizontal_Explosion_Smoke_Ring.mp4",
          "description": "This is a looping effect that a single flame and smoke explosion forms a distinct ring shape around a central axis, and importantly, the ring is parallel to the ground (horizontal plane). The ring itself consists of smoke from the explosion, and flames appear randomly inside the ring rather than at fixed positions."
      },
      {
          "name": "NS_LargeBlackSmokeTornado",
          "video": "./videos_with_desc/NS_LargeBlackSmokeTornado/NS_LargeBlackSmokeTornado.mp4",
          "description": "Generate a large black tornado in a cone shape, swirling upward from the bottom in a rotating motion, with its radius gradually expanding as it rises."
      },
      {
          "name": "NS_Lightning",
          "video": "./videos_with_desc/NS_Lightning/NS_Lightning.mp4",
          "description": "Intertwined blue lightning bolts randomly generate from all sides\r\n"
      },
      {
          "name": "NS_MultiLayer_Spherical_Star_Explosion",
          "video": "./videos_with_desc/NS_MultiLayer_Spherical_Star_Explosion/NS_MultiLayer_Spherical_Star_Explosion.mp4",
          "description": "Create a multi-layer spherical explosion particle effect. From the center outward, the layers are sparkly purple, blue, and pink respectively. The particles are stars of varying sizes. Each layer explodes outward from the center and then fades away. The layers have different ranges: the first (purple) layer has the largest radius, the second (blue) layer has a medium radius, and the third (pink) layer has the smallest radius."
      },
      {
          "name": "NS_MultiTiered_Water_Fountain",
          "video": "./videos_with_desc/NS_MultiTiered_Water_Fountain/NS_MultiTiered_Water_Fountain.mp4",
          "description": "This effect simulates a continuous multi-tiered water fountain. From a central point on the ground, multiple bright cyan-white water jets shoot straight upward at varying heights: the tallest central jet rises in a thin, fast vertical column, while the surrounding shorter jets fan outward in slightly angled, arcing parabolic paths, forming a dome-like silhouette of interlaced water ribbons. Each ribbon is a translucent, luminous streak with a soft volumetric core, catching light and showing subtle white-blue highlights along its length. At the peak of each jet, the water breaks apart into countless tiny, bright water droplets that scatter outward in all directions, then begin to descend under gravity in elegant arcing trajectories, sparkling as they catch light. The falling droplets decelerate slightly near the ground and produce a continuous fine mist of pale blue-white spray that hangs near the base, spreading outward in a thin circular layer. Simultaneously, a gentle turbulence field causes the water ribbons to quiver subtly and the droplets to drift with slight random deviation, adding natural variation. The mist layer gradually lifts and fades outward from the center, becoming more translucent at its edges before dissipating completely. This entire cycle is continuous, with new jets constantly replacing the falling water, maintaining a steady, dynamic fountain shape."
      },
      {
          "name": "NS_PurpleOrb_ContractExpand",
          "video": "./videos_with_desc/NS_PurpleOrb_ContractExpand/NS_PurpleOrb_ContractExpand.mp4",
          "description": "A volumetric purple orb rapidly contracts, then expands outward."
      },
      {
          "name": "NS_RedGlowBurst_With_Trails_And_GlitterDrift",
          "video": "./videos_with_desc/NS_RedGlowBurst_With_Trails_And_GlitterDrift/NS_RedGlowBurst_With_Trails_And_GlitterDrift.mp4",
          "description": "Red glowing light blobs burst from a central point, expanding outward in a sphere. During the fast motion, they leave white ribbon-like trails that last a medium duration. After the trails disappear, each blob fades away, and  new glittering blobs spawn exactly in its place. These new blobs no longer move outward; instead, each drifts slowly from its starting point in a random direction, with the drift amplitude growing over time. They glitter brightly, then fade out."
      },
      {
          "name": "NS_Rising_Blue_Ring_Cylinder_Lines",
          "video": "./videos_with_desc/NS_Rising_Blue_Ring_Cylinder_Lines/NS_Rising_Blue_Ring_Cylinder_Lines.mp4",
          "description": "A glowing blue horizontal ring continuously generates at the same location on the ground, rises vertically without size change, and then disappears. Each ring begins to rise before the previous one disappears. Inside the cylindrical volume formed by the rising rings, a moderate number of vertical blue glowing thin lines rise quickly. They disappear before leaving the ring’s coverage, yet they roughly fill the entire cylinder. These lines never rise above the highest ring."
      },
      {
          "name": "NS_SlowRisingSmokeColumn",
          "video": "./videos_with_desc/NS_SlowRisingSmokeColumn/NS_SlowRisingSmokeColumn.mp4",
          "description": "Grayish-white smoke slowly drifts upward from bottom to top, forming a smoke column whose radius gradually expands, then fades away."
      },
      {
          "name": "NS_Sparks_9_2000",
          "video": "./videos_with_desc/NS_Sparks_9_2000/NS_Sparks_9_2000.mp4",
          "description": "This continuous effect starts with a large number of small glowing blobs drifting across a wide area from the very beginning. Many glowing, shining small orange-red blobs appear, representing the embers. The embers do not fall straight down; instead, they waver and float with a gentle, side‑to‑side motion as they slowly descend. When each blob fades, it leaves behind a small, quick, small puff of light, wispy smoke."
      },
      {
          "name": "NS_StormCloud_With_DownwardLightning",
          "video": "./videos_with_desc/NS_StormCloud_With_DownwardLightning/NS_StormCloud_With_DownwardLightning.mp4",
          "description": "A dense, non-spreading dark storm cloud, roughly shaped like a very short cylinder, condenses in midair. After one second, lightning bolts generate from the center of cloud and strike downward, about four or five every second."
      },
      {
          "name": "NS_ToxicCloud_AcidRain_ImpactMist",
          "video": "./videos_with_desc/NS_ToxicCloud_AcidRain_ImpactMist/NS_ToxicCloud_AcidRain_ImpactMist.mp4",
          "description": "A dense, non-spreading toxic cloud condenses in midair. After a moment, it begins generating green thin rain streaks from within itself, which fall down. When the rain streaks hit the ground, small puffs of pale green toxic mist rise up from the point of impact."
      },
      {
          "name": "NS_TwoStage_GlitterBurst",
          "video": "./videos_with_desc/NS_TwoStage_GlitterBurst/NS_TwoStage_GlitterBurst.mp4",
          "description": "This effect is a two-stage burst. A small white projectile rises first, then bursts into a dense sphere of tiny glittering yellow particles and tiny glittering orange-red particles. The sphere expands outward, slows down, and hangs in the air. After that, the cluster continues to disperse outward, softens, and fades away."
      },
      {
          "name": "NS_fireboom_1930",
          "video": "./videos_with_desc/NS_fireboom_1930/NS_fireboom_1930.mp4",
          "description": "This is a looping explosion effect depicting the life cycle of flame and smoke inside a vertical plane (size ~50). The subject is an irregular, fractal-clustered particle effect. Its core is a dense, turbulent mass of fire cells with fractal complexity. As the explosion evolves through its life cycle, thick, swirling grey-black smoke intertwines with the irregular flame. Numerous fine, glowing orange blobs continuously emerge from the turbulent core, drift upward, and then fade away."
      },
      {
          "name": "SYS_CyanCore_HorizontalOutwardBurst",
          "video": "./videos_with_desc/SYS_CyanCore_HorizontalOutwardBurst/SYS_CyanCore_HorizontalOutwardBurst.mp4",
          "description": "A bright cyan-blue cluster of particles continuously emits a large number of light green and light blue particles outward quickly in all horizontal directions. The outward particles fade out as they move away from the center."
      },
      {
          "name": "SequentialRedGreenFireworkBalls",
          "video": "./videos_with_desc/SequentialRedGreenFireworkBalls/SequentialRedGreenFireworkBalls.mp4",
          "description": "A series of bright red and green firework balls shooting upward one by one, then exploding outward in all directions into spherical fireworks. Each launch generates a trail of silver sparks, but the explosion does not."
      },
      {
          "name": "ThrownLightBlob_GroundBurst_TrailingHemisphericFall",
          "video": "./videos_with_desc/ThrownLightBlob_GroundBurst_TrailingHemisphericFall/ThrownLightBlob_GroundBurst_TrailingHemisphericFall1.mp4",
          "description": "An orange light blob is thrown upwards. When it drops onto the ground, many smaller light blobs blast outward from the center, forming a hemi-sphere and leaving bright orange trails as they fall in arcing paths. As they descend, these trailing blobs fade away completely."
      },
      {
          "name": "floating",
          "video": "./videos_with_desc/floating/floating.mp4",
          "description": "Green and blue circular particles spawn over a large area on the ground, floating upward with random disturbances. Both blue and green appear in varying shades. The particles have random initial velocity when they spawn on the ground."
      },
      {
          "name": "rain",
          "video": "./videos_with_desc/rain/rain.mp4",
          "description": "The rain appears as thin, translucent white streaks falling steadily from the sky. They drop in quick, continuous parallel lines, looking like delicate blurs of water in motion. As these glassy streaks hit the ground, they vanish instantly into tiny, fleeting ripples — small white rings that stay strictly surface-bound, spreading flush against the ground without ever lifting from the pavement.. It creates a clean, calm, and rhythmic visual of a light shower, gently washing over the scene without any dramatic winds or heavy storms."
      }
  ];

  var showcase = document.querySelector(".video-showcase");

  if (!showcase) {
    return;
  }

  function createCard(effect) {
    var article = document.createElement("article");
    var video = document.createElement("video");
    var copy = document.createElement("div");
    var text = document.createElement("p");

    article.className = "video-showcase-card";
    video.src = effect.video;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("aria-label", "Generated particle effect video");

    copy.className = "video-showcase-copy";
    text.textContent = effect.description;

    copy.appendChild(text);
    article.appendChild(video);
    article.appendChild(copy);

    return article;
  }

  function playVideo(video) {
    video.load();
    var playRequest = video.play();

    if (playRequest && typeof playRequest.catch === "function") {
      playRequest.catch(function () {});
    }
  }

  function preloadVideos(videos) {
    videos.forEach(function (video) {
      playVideo(video);
    });
  }

  function cloneTracks(tracks) {
    tracks.forEach(function (track) {
      Array.prototype.slice.call(track.children).forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    });
  }

  var tracks = showcase.querySelectorAll(".video-showcase-track");
  var perRail = Math.ceil(effects.length / tracks.length);

  effects.forEach(function (effect, index) {
    var railIndex = Math.floor(index / perRail);
    var track = tracks[Math.min(railIndex, tracks.length - 1)];
    track.appendChild(createCard(effect));
  });

  cloneTracks(tracks);
  preloadVideos(showcase.querySelectorAll("video"));
})();
