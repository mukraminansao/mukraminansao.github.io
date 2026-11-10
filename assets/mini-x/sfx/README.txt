MINI-X CUSTOM SOUNDS
====================
Mini-X makes all of his sounds himself (synthesized in the browser). To use your own audio files instead,
put MP3/WAV/OGG files in this folder and list them in sounds.json, for example:

{
  "charge":     "beam-charge.mp3",
  "blast":      "beam-fire.mp3",
  "boltCharge": "lightning-charge.mp3",
  "bolt":       "lightning-strike.mp3",
  "enemyFire":  "enemy-laser.mp3",
  "teleport":   "teleport.mp3",
  "fire":       "palm-shot.mp3",
  "dodge":      "dodge.mp3",
  "hit":        "hit.mp3"
}

Names used by the current skills: charge (Kamehameha chant), boltCharge (Chidori), rasengan, rasenganVoice, swap (Amenotejikara),
teleport, amaterasu, katonSeal (hand seals), katonShout (the shouted name + fire roar), killDouble, killTriple, killUltra, killRampage, virusDie (a virus is destroyed), chibaku (the call + gravity rumble), chibakuBoom (the sphere exploding).
The Katon timing assumes the shout clip's fire roar starts about 3.2 s in (KATON_ROAR in mini-x-3d/runtime/src/main.js).

Any sound not listed keeps the built-in version. Refresh with Ctrl+F5 after changing files.
Only use sounds you have the right to publish (your own recordings, or royalty-free / licensed clips).
Clips taken from anime, games or films are copyrighted and should not go on a public site.
