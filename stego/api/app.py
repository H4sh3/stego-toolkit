from flask import Flask,request,jsonify
from util import replace_newline
import subprocess
import basic_tools
import json

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'


@app.route('/data_dir')
def data_dir_route():
    return data_dir()

@app.route('/api/run')
def start_tool():
    log_request(request)
    filename, tool = get_filename_and_tool(request)
    return basic_tools.run(str(filename),str(tool))

@app.route('/api/tools')
def tools_list():
    return jsonify(basic_tools.ALLOWED_TOOLS)

def data_dir():
    output = subprocess.Popen("ls ../data", shell=True, stdout=subprocess.PIPE).stdout.read()
    return replace_newline(output)

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

