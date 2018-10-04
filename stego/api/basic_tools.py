import subprocess
from util import replace_newline
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

def escape_filename(fn):
    return fn.replace('/','')

def file(fn):
    fn = escape_filename(fn)
    output = subprocess.Popen("file /data/"+fn, shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)
    
def exiftool(fn):
    fn = escape_filename(fn)
    output = subprocess.Popen("exiftool /data/"+fn, shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)

def binwalk(fn):
    fn = escape_filename(fn)
    output = subprocess.Popen("binwalk /data/"+fn, shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)

def strings(fn):
    fn = escape_filename(fn)
    output = subprocess.Popen("strings /data/"+fn, shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)

def foremost(fn):
    fn = escape_filename(fn)
    output = subprocess.Popen("foremost /data/"+fn, shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)