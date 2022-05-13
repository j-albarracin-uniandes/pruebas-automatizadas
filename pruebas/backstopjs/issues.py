import json
import os
from os import listdir
from os.path import isfile, join
import shutil


def getJson():
    dirPath = './issues'

    try:
        shutil.rmtree(dirPath)

    except OSError as e:
        print(f"Error:{ e.strerror}")

    os.mkdir("./issues")
    os.mkdir("./issues/list")

    pathConfigTest = "./backstop_data/html_report/"

    with open(pathConfigTest+"config.js", "r") as f:
        contents = f.read()
        with open("./issues/config.txt", "a") as r:
            r.write(contents)
    # Read in the file
    with open("./issues/config.txt", 'r') as file:
        filedata = file.read()

    # Replace the target string
    filedata = filedata.replace('report({', '{').replace('});', '}')

    # Write the file out again
    with open("./issues/config.json", 'a') as file:
        file.write(filedata)

    with open("./issues/config.json", "r") as f:
        reportConfig = json.load(f)

    return reportConfig


issuesList = [k for k in getJson()["tests"] if 'pass' != k["status"]]
"""  [k for k in getJson()["tests"] if 'pass' != k["status"]] """


for idx, x in enumerate(issuesList):
    id = str(idx+1)
    label = x["pair"]["label"]
    misMatchThreshold = str(x["pair"]["misMatchThreshold"])
    misMatchPercentage = x["pair"]["diff"]["misMatchPercentage"]
    hotxixName = "[HOTFIX-VRT-"+id+"]"+label
    pathReference = "https://raw.githubusercontent.com/j-albarracin-uniandes/pruebas-automatizadas/master/pruebas/backstopjs/backstop_data/bitmaps_reference/"
    pathTest = "https://raw.githubusercontent.com/j-albarracin-uniandes/pruebas-automatizadas/master/pruebas/backstopjs/backstop_data/bitmaps_test/20220513-141203/failed_diff_"
    pathV4="https://raw.githubusercontent.com/j-albarracin-uniandes/pruebas-automatizadas/master/pruebas/backstopjs/v4/"
    with open("./issues/list/"+hotxixName+".md", "a", encoding='utf-8') as file:
        imgV3 = pathReference+x["pair"]["fileName"]
        imgV4 = pathV4+x["pair"]["label"].replace(" ","%20")
        tmgDiff = pathTest+x["pair"]["fileName"]
        numeroV3 = "3.42"
        numeroV4 = "4.41.3"
        file.write("# "+hotxixName+"\n\n")
        file.write("Se espera que el porcentaje de diferencia de la regresión visual entre las imagenes ["+label+" (Ghost v"+numeroV3+") ]("+imgV3+") y ["+label+" (Ghost v"+numeroV4+") ]("+imgV4+")  en la prueba fuese inferior a " +
                   misMatchThreshold+" %"+"\n\n")
        file.write("## Comportamiento Actual:"+"\n\n")
        file.write(
            "La diferencia de la regresión visual dio como resultado: "+misMatchPercentage+"\n\n")
        file.write("# Evidencias"+hotxixName+"\n\n")
        file.write("### Diferencias "+"\n\n")
        file.write("![tmgDiff]("+tmgDiff+")"+"\n\n")
        file.write("### Versión "+numeroV3+"\n\n")
        file.write("![imgV3]("+imgV3+")"+"\n\n")
        file.write("### Versión "+numeroV4+"\n\n")
        file.write("![imgV4]("+imgV4+")"+"\n\n")
        file.write("# Contexto"+"\n\n")
        file.write("+ **Ghost version:** v"+numeroV3+", v"+numeroV4+"\n\n")
        file.write("+ **Navegador:** Google Chrome 1000.04896.60"+"\n\n")
        file.write("+ **SO:** Windows 11."+"\n\n")
