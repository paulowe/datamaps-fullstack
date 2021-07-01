'''
Generate Team Name JSON based on Image Directory
'''
from os import listdir
from os.path import isfile, join
import json

MY_PATH = raw_input("Enter file directory: ")

all_files = [f for f in listdir(MY_PATH) if isfile(join(MY_PATH, f))]
filtered = filter(lambda x: ".jpg" in x, all_files)
filtered.sort()  # alphabetically

final_list = []

# clean list and output final_list
for ele in filtered:
    name = ele.split(".")[0]
    first_name = name.split("-")[0].capitalize()
    last_name = name.split("-")[1].capitalize()
    final_list.append(first_name + " " + last_name)

# generate json
output_str = ""

for ele in final_list:
    x = {

        "name": ele,
        "role": "Developer",
        "linkedin": "https://www.linkedin.com",

    }
    y = json.dumps(x) + ", "
    output_str += y

print(output_str)
