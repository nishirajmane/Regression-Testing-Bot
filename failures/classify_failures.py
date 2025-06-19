import os
import re

def classify(log_text):
    if re.search(r'TimeoutError|Element not found', log_text, re.I):
        return 'Flaky Test'
    elif re.search(r'ECONNREFUSED|500 Internal Server', log_text, re.I):
        return 'Environment Error'
    elif re.search(r'AssertionError|Unexpected value', log_text, re.I):
        return 'Real App Bug'
    else:
        return 'Unknown'

log_dir = './failures/logs'
summary = {}

for filename in os.listdir(log_dir):
    path = os.path.join(log_dir, filename)
    with open(path, 'r') as file:
        content = file.read()
        result = classify(content)
        summary[filename] = result

print('🧪 Failure Summary:')
for log, label in summary.items():
    print(f'- {log}: {label}')
