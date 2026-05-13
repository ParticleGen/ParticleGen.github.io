import os
import json
import glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
VIDEOS_DIR = os.path.join(SCRIPT_DIR, "static", "videos")
OUTPUT_JS = os.path.join(SCRIPT_DIR, "static", "js", "video-data.js")

os.makedirs(os.path.dirname(OUTPUT_JS), exist_ok=True)

mp4_files = sorted(glob.glob(os.path.join(VIDEOS_DIR, "*.mp4")))

data = []
for mp4 in mp4_files:
    name = os.path.splitext(os.path.basename(mp4))[0]
    txt_path = os.path.join(VIDEOS_DIR, name + ".txt")
    prompt = ""
    if os.path.exists(txt_path):
        with open(txt_path, "r", encoding="utf-8") as f:
            prompt = f.read().strip()
    data.append({"n": name, "t": prompt})

js_lines = ["var VIDEO_DATA = ["]
for item in data:
    n_escaped = json.dumps(item["n"], ensure_ascii=False)
    t_escaped = json.dumps(item["t"], ensure_ascii=False)
    js_lines.append("  {n:" + n_escaped + ",t:" + t_escaped + "},")
js_lines.append("];")

with open(OUTPUT_JS, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines) + "\n")

print("Generated " + OUTPUT_JS)
print("Total videos: " + str(len(data)))
