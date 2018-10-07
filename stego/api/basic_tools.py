import subprocess
from util import secure_filename

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
ALLOWED_TOOLS = ['file',
                 'exiftool',
                 'binwalk',
                 'strings',
                 'pngcheck',
                 'identify',
                 'zsteg -a',
                 'stegdetect']

def run(tool,filename):
    if any(tool in s for s in ALLOWED_TOOLS):
        filename = secure_filename(filename)
        cmd = tool + ' /tmp/files/' + filename
        output = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout.read()
        return output
    else:
        return 'Unknown tool'

