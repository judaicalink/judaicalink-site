"""
Generator for the beacon file.
This scripts generates the beacon file for the GND IDs.
It uses a simple sparql query.
It should be run monthly.

(c) Benjamin Schnabel, Stuttgart Media University
schnabel@hdm-stuttgart.de
2022-06-09
"""

import datetime
import os
from SPARQLWrapper import SPARQLWrapper, JSON

now = datetime.datetime.now()

def header():
    """
    Generate the header of the beacon file with the current date.
    """
    header_text = """#FORMAT: BEACON
#PREFIX: https://d-nb.info/gnd/
#TARGET: https://data.judaicalink.org/data/gnd/{ID}
#CONTACT: Benjamin Schnabel <b.schnabel@hs-mannheim.de>
#INSTITUTION: Technische Hochschule Mannheim - University of Applied Sciences Mannheim
#MESSAGE: JudaicaLink
#FEED: https://data.judaicalink.org/dumps/beacon/current/beacon-persons.txt
#TIMESTAMP: """ + now.strftime("%Y-%m-%dT%H:%M:%SZ") + "\n#UPDATE: monthly\n"
    return header_text


def save_file(text):
    """
    Save the beacon file to the current directory.
    """
    filename = '/data/dumps/beacon/current/beacon-persons.txt'
    if os.path.exists(filename):
        os.rename(filename, filename.replace('.txt', '-') + now.strftime("%Y-%m-%d") + '.txt')
    try:
        with open(filename, 'w') as f:
            f.write(text)
            print("File written successfully")
            return filename
    except IOError:
        print("Error writing file")
        return False


def remove_duplicates(ids):
    """
    Removes duplicate entries.
    """
    return list(dict.fromkeys(ids))


def sanitize_ids(ids):
    """
    - Removes "NA"
    - Extracts plain IDs from URIs (e.g., http://d-nb.info/gnd/12345678 -> 12345678)
    """
    cleaned_ids = []
    for id in ids:
        if id == "NA":
            continue
        if '/' in id:
            cleaned_ids.append(id.split('/')[-1])
        else:
            cleaned_ids.append(id)
    return cleaned_ids


def get_gnd_ids():
    """
    Fetch GND IDs via SPARQL.
    """
    gnd_ids = []
    sparql = SPARQLWrapper("https://data.judaicalink.org/sparql/query")
    sparql.setQuery("""
    PREFIX gndo: <http://d-nb.info/standards/elementset/gnd#>
    SELECT ?id
    WHERE {
       { GRAPH ?g { ?person gndo:gndIdentifier ?id.} }
       UNION { GRAPH ?g { ?person gndo:gndIdentifier ?id. } }
    }
    """)
    try:
        sparql.setReturnFormat(JSON)
        results = sparql.query().convert()
        for result in results["results"]["bindings"]:
            if result["id"]["type"] == "literal":
                gnd_ids.append(result["id"]["value"])
        return remove_duplicates(sanitize_ids(gnd_ids))
    except Exception as e:
        print('Error fetching data: ', e)
    return gnd_ids


ids = get_gnd_ids()
header_text = header()
beacon_text = header_text + "\n" + "\n".join(ids)
result = save_file(beacon_text)

if result is not None:
    print('Beacon file successfully created at "%s"' % result)
else:
    print('Error creating beacon file')
