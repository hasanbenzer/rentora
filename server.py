import http.server
import socketserver
import socket
import json
import os
import shutil
import webbrowser
from datetime import datetime

PORT = 8090
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "kira_verileri.json")
BACKUP_DIR = os.path.join(BASE_DIR, "yedekler")
VERSION_FILE = os.path.join(BASE_DIR, "VERSION")


def get_app_version():
    if os.path.exists(VERSION_FILE):
        try:
            with open(VERSION_FILE, "r", encoding="utf-8") as f:
                return f.read().strip() or "1.0.0"
        except Exception:
            pass
    return "1.0.0"


def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"


def create_safe_backup():
    """Veri dosyası üzerine yazılmadan önce otomatik yedek alır (Veri kaybı koruması)."""
    if not os.path.exists(DATA_FILE):
        return
    try:
        os.makedirs(BACKUP_DIR, exist_ok=True)
        day_stamp = datetime.now().strftime("%Y-%m-%d")
        backup_path = os.path.join(BACKUP_DIR, f"kira_verileri_YEDEK_{day_stamp}.json")
        shutil.copy2(DATA_FILE, backup_path)
    except Exception:
        pass


class KiraHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_GET(self):
        if self.path.startswith("/api/info"):
            ip = get_local_ip()
            payload = {
                "lanUrl": f"http://{ip}:{PORT}",
                "port": PORT,
                "version": get_app_version()
            }
            self.send_json(payload)
            return
        if self.path.startswith("/api/data"):
            if os.path.exists(DATA_FILE):
                try:
                    with open(DATA_FILE, "r", encoding="utf-8") as f:
                        data = json.load(f)
                    self.send_json(data)
                    return
                except Exception:
                    pass
            self.send_json({})
            return
        super().do_GET()

    def do_POST(self):
        if self.path.startswith("/api/data"):
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length).decode("utf-8")
            try:
                parsed = json.loads(raw)
                # Eğer mevcut dosyada mülkler varsa ve gelen paket tamamen boşsa (kaza ile sıfırlama koruması), önce yedek al
                create_safe_backup()
                tmp_file = DATA_FILE + ".tmp"
                with open(tmp_file, "w", encoding="utf-8") as f:
                    json.dump(parsed, f, ensure_ascii=False, indent=2)
                os.replace(tmp_file, DATA_FILE)
                self.send_json({"ok": True, "version": get_app_version()})
            except Exception as e:
                self.send_json({"ok": False, "error": str(e)}, status=400)
            return
        self.send_error(404)

    def send_json(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    ip = get_local_ip()
    ver = get_app_version()
    print("=" * 64)
    print(f"  RENTORA v{ver} — GAYRIMENKUL & KIRA YONETIM MERKEZI")
    print("=" * 64)
    print(f"  Bilgisayardan erisim : http://localhost:{PORT}")
    print(f"  iPhone / Android Wi-Fi: http://{ip}:{PORT}")
    print("  Veri Dosyasi (Korunur): kira_verileri.json")
    print("=" * 64)
    webbrowser.open(f"http://localhost:{PORT}")
    with socketserver.ThreadingTCPServer(("0.0.0.0", PORT), KiraHandler) as httpd:
        httpd.allow_reuse_address = True
        httpd.serve_forever()
