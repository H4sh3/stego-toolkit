from flask import Flask,request
from util import replace_newline
import subprocess
import basic_tools

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

@app.route('/data_dir')
def data_dir_route():
    return data_dir()

@app.route('/file')
def file_route():
    log_request(request)
    return basic_tools.file(get_filename(request))

@app.route('/exiftool')
def exiftool_route():
    log_request(request)
    return basic_tools.exiftool(get_filename(request))

@app.route('/binwalk')
def binwalk_route():
    log_request(request)
    return basic_tools.binwalk(get_filename(request))

@app.route('/strings')
def strings_route():
    log_request(request)
    return basic_tools.strings(get_filename(request))

@app.route('/foremost')
def foremost_route():
    log_request(request)
    return basic_tools.foremost(get_filename(request))




def data_dir():
    output = subprocess.Popen("ls ../data", shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)

def log_request(request):
    app.logger.info('Request path: %s for file %s', request.path,get_filename(request))

def get_filename(request):
    return request.args.get('fn')


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')