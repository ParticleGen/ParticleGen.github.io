import openpyxl
import os

XLSX_PATH = r"f:\homework\25-26Down\UEparticle\videos\粒子特效汇总.xlsx"
VIDEOS_DIR = r"f:\homework\25-26Down\UEparticle\videos"
OUTPUT_DIR = r"f:\homework\25-26Down\UEparticle\videos"

wb = openpyxl.load_workbook(XLSX_PATH)
ws = wb.active

name_to_desc = {}
video_alias_to_name = {}
for row in ws.iter_rows(min_row=2):
    name = row[1].value
    desc = row[2].value
    if name and desc:
        name_to_desc[name.strip()] = desc.strip()
    if name and row[9].value:
        alias = str(row[9].value).strip()
        if alias and not alias.startswith("?") and alias != "我没有" and alias != "ribbon有问题":
            video_alias_to_name[alias] = name.strip()

video_files = [f for f in os.listdir(VIDEOS_DIR) if f.endswith(".mp4")]
video_names = [os.path.splitext(f)[0] for f in video_files]

MANUAL_MAP = {
    "floating": "GroundArea_Floating_BlueGreen_CircularParticles",
    "GoldenWhiteProjectile_FireworkBurst": "NS_firework2",
    "Horizontal_Gravity_LightBlob_Stream": "NS_Sparks_1_new_2315",
    "MidairCloudDropAndGroundSpread": "toxic_rain",
    "NS_ColorBurst_With_WhiteTrails_And_CyanGlitterFollowup": "NS_Colorful_Firework_GlitterBurst",
    "NS_FireRain_Skill": "fire_rain_skill",
    "NS_Fireworks_GoldenLightBlobField": "NS_firework_sky",
    "NS_Firework_Orange_TrailBurst": "NS_firework_yellow_red",
    "NS_FlameSmoke_RingExplosion": "NS_lightstrike",
    "NS_GroundFireworks_GreenTrails_RedBlueApexBurst": "NS_firework_double",
    "NS_GroundFireworks_TripleConcentricBurst": "NS_triple_burst",
    "NS_Healing_Ring_CrossRise": "heal",
    "NS_Horizontal_Explosion_Smoke_Ring": "FXS_EType_Main_1521",
    "NS_LargeBlackSmokeTornado": "NS_Large_Black_Tornado",
    "NS_MultiTiered_Water_Fountain": "NS_fountain",
    "NS_PurpleOrb_ContractExpand": "purple_orb",
    "NS_RedGlowBurst_With_Trails_And_GlitterDrift": "FXS_CType_Sub_2055",
    "NS_StormCloud_With_DownwardLightning": "cloud_lightning",
    "NS_ToxicCloud_AcidRain_ImpactMist": "toxic_rain",
    "NS_TwoStage_GlitterBurst": "glowing_fireworks",
    "ThrownLightBlob_GroundBurst_TrailingHemisphericFall": "fantastic_explosion",
    "ThrownLightBlob_GroundBurst_TrailingHemisphericFall1": "fantastic_explosion",
}

matched = 0
unmatched = []

for vn in video_names:
    excel_name = None

    if vn in name_to_desc:
        excel_name = vn
    elif vn in video_alias_to_name:
        excel_name = video_alias_to_name[vn]
    elif vn in MANUAL_MAP:
        excel_name = MANUAL_MAP[vn]
    else:
        for key in name_to_desc:
            if key in vn or vn in key:
                excel_name = key
                break

    if excel_name and excel_name in name_to_desc:
        out_path = os.path.join(OUTPUT_DIR, f"{vn}.txt")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(name_to_desc[excel_name])
        matched += 1
        source = "direct" if vn == excel_name else ("alias" if vn in video_alias_to_name else ("manual" if vn in MANUAL_MAP else "fuzzy"))
        print(f"[OK-{source}] {vn} <- {excel_name} -> {vn}.txt")
    else:
        unmatched.append(vn)
        print(f"[MISS] {vn} - no match in Excel")

print(f"\nDone! Matched: {matched}, Unmatched: {len(unmatched)}")
if unmatched:
    print("Unmatched videos:")
    for u in unmatched:
        print(f"  - {u}")
