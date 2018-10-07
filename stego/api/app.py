from flask import Flask,request,jsonify
import subprocess
import basic_tools
import os
from util import secure_filename

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

@app.route('/api/files',methods=['GET'])
def files_route():
    if request.method == 'GET':
        return get_files()

@app.route('/api/deletefile/<string:filename>',methods=['DELETE'])
def delete_files_route(filename):
    if request.method == 'DELETE':
        delete_file(secure_filename(filename))
        return jsonify(filename)

@app.route('/api/run')
def start_tool():
    log_request(request)
    filename, tool = get_filename_and_tool(request)
    return jsonify(basic_tools.run(str(filename),str(tool)))

@app.route('/api/tools')
def tools_list():
    return jsonify(basic_tools.ALLOWED_TOOLS)

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'error: no picture'
        file = request.files['file']
        filename = file.filename
        if filename == '':
            return 'error: no filename'
        if file:
            logit(filename)
            file.save(os.path.join('/tmp/files', filename))
            return jsonify(filename)
    return 'error'

def get_files():
    output = subprocess.Popen("ls /tmp/files", shell=True, stdout=subprocess.PIPE).stdout.read()
    return jsonify(output.split())

def delete_file(file):
    subprocess.Popen("rm /tmp/files/"+file, shell=True, stdout=subprocess.PIPE).stdout.read()


def log_request(request):
    filename, tool = get_filename_and_tool(request)
    app.logger.info('Request path: %s with %s', filename,tool)

def get_filename_and_tool(request):
    tool = request.args.get('tool')
    filename = request.args.get('filename')
    logit(tool)
    logit(filename)
    return str(tool),str(filename)

def logit(c):
    app.logger.info(c)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

