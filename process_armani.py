from PIL import Image
import os

source = r"G:\Guriche\img\Armani"
dest = r"G:\Guriche\img"

for src_name in os.listdir(source):
    if not src_name.lower().endswith('.png'): continue
    src_path = os.path.join(source, src_name)
    
    # Clean the name to match script.js
    lower_name = src_name.lower().replace(' ', '_').replace('', '')
    dest_name = lower_name
    
    if "s" in lower_name and "armani_s" in lower_name and len(lower_name) < 14:
        dest_name = "armani_si.png"
    elif "parfum" in lower_name and "acqua" in lower_name:
        dest_name = "armani_acqua_di_gio_parfum.png"
    elif "clasico" in lower_name:
        dest_name = "armani_acqua_di_gio_clasico.png"
    elif "gi" in lower_name and "acqua" in lower_name:
        dest_name = lower_name.replace("gi", "gio")
        if "gioo" in dest_name: dest_name = dest_name.replace("gioo", "gio")

    if dest_name == "armani_acqua_di_gio.png" and "profondo" in src_name.lower():
        dest_name = "armani_acqua_di_gio_profondo.png"
        
    dest_name = dest_name.replace('armani_acqua_di_gio_profondo.png', 'armani_acqua_di_gio_profondo.png')
    
    # explicit fallback overrides to ensure exact matches
    if "profondo" in src_name.lower(): dest_name = "armani_acqua_di_gio_profondo.png"
    if "code_femme" in src_name.lower(): dest_name = "armani_code_femme.png"
    if "code_masculino" in src_name.lower(): dest_name = "armani_code_masculino.png"
    if "code.png" in src_name.lower(): dest_name = "armani_code.png"

    dest_path = os.path.join(dest, dest_name)
    
    try:
        img = Image.open(src_path)
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA")
        img.save(dest_path, "PNG")
        print(f"OK: {src_name} -> {dest_name}")
    except Exception as e:
        print(f"Error {src_name}: {e}")
