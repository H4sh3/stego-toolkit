def secure_filename(fn):
    fn = fn.replace('/','')
    return fn.replace('..','')