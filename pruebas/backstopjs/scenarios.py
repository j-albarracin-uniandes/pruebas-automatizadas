from os import listdir
from os.path import isfile, join
import json

reference = "./backstop_data/bitmaps_reference"
v3Path = "./v3"
v4Path = "./v4"
backstopFolder = "D:/Jhon/Educacion/MISO/Pruebas automatizadas de software/backstopjs"
print('Ingrese 0 para v3 o 1 para v4')
folderOption = input()

filesV3 = [f for f in listdir(v3Path) if isfile(join(v3Path, f))]
filesV4 = [f for f in listdir(v4Path) if isfile(join(v4Path, f))]

scenarios = []
folder = filesV3
folderPath = "/v3/"
if folderOption != "0":
    folder = filesV4
    folderPath = "/v4/"

for esc in filesV3:
    scenarios.append({"label": esc, "url": "file:///" +
                     backstopFolder+folderPath+esc})


with open("./backstop.json", "r") as f:
    backstopJson = json.load(f)

backstopJson["scenarios"] = scenarios
file = open("./backstop.json", "w")

file.write(json.dumps(backstopJson, indent=4))
file.close
