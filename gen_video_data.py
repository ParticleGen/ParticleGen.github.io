import os
import json
import glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
VIDEOS_DIR = os.path.join(SCRIPT_DIR, "static", "videos")
OUTPUT_JS = os.path.join(SCRIPT_DIR, "static", "js", "video-data.js")

os.makedirs(os.path.dirname(OUTPUT_JS), exist_ok=True)

subdirs = sorted(
    d for d in glob.glob(os.path.join(VIDEOS_DIR, "*"))
    if os.path.isdir(d)
)

data = []
for subdir in subdirs:
    folder_name = os.path.basename(subdir)
    mp4_candidates = sorted(glob.glob(os.path.join(subdir, "*.mp4")))
    if not mp4_candidates:
        continue
    mp4_file = os.path.basename(mp4_candidates[0])
    mp4_name = os.path.splitext(mp4_file)[0]

    desc_path = os.path.join(subdir, "desc.txt")
    prompt = ""
    if os.path.exists(desc_path):
        with open(desc_path, "r", encoding="utf-8") as f:
            prompt = f.read().strip()

    data.append({"n": folder_name, "f": mp4_name, "t": prompt})

js_lines = ["var VIDEO_DATA = ["]
for item in data:
    n_escaped = json.dumps(item["n"], ensure_ascii=False)
    f_escaped = json.dumps(item["f"], ensure_ascii=False)
    t_escaped = json.dumps(item["t"], ensure_ascii=False)
    js_lines.append("  {n:" + n_escaped + ",f:" + f_escaped + ",t:" + t_escaped + "},")
js_lines.append("];")

with open(OUTPUT_JS, "w", encoding="utf-8") as f:
    f.write("\n".join(js_lines) + "\n")

print("Generated " + OUTPUT_JS)
print("Total videos: " + str(len(data)))
