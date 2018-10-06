import subprocess
from util import replace_newline

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
ALLOWED_TOOLS = ['file',
                 'exiftool',
                 'binwalk',
                 'strings',
                 'foremost',
                 'pngcheck',
                 'identify',
                 'zsteg -a',
                 'stegdetect']
def escape_filename(fn):
    return fn.replace('/','')

def run(tool,filename):
    if any(tool in s for s in ALLOWED_TOOLS):
        filename = escape_filename(filename)
        cmd = tool + ' /data/' + filename
        output = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE).stdout.read()
        return output
    else:
        return 'Unknown tool'

